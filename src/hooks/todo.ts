import { MutableRefObject, useCallback, useRef } from 'react';
import { mutate } from 'swr';
import type { TodoResponse } from '../common/fetch';
import useAnimation from '../hooks/animation';

type TodoListResponse = {
  addTodoList: (data: TodoResponse) => Promise<void>;
  inputEl: MutableRefObject<HTMLInputElement>;
};

const ADD_ID_NUMBER = 1;

const useTodoList = (): TodoListResponse => {
  const inputEl = useRef(null);

  const { doAnimate: showToast } = useAnimation();

  const addTodoList = useCallback(
    async (data) => {
      const taskId = data.length + ADD_ID_NUMBER;
      const inputValue = inputEl.current.value;

      // validate
      if (!inputValue) {
        return;
      }

      // 1. update client data
      mutate('/api/todo', [...data, { id: taskId, item: inputValue }], false);

      // 2. update server data
      const res = await fetch('api/todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ text: inputValue }),
      });

      // success
      if (res.status === 200) {
        showToast();
        inputEl.current.value = '';
      }

      // todo: err

      // 3. refetch
      mutate('/api/todo');
    },
    [showToast],
  );

  return {
    addTodoList,
    inputEl,
  };
};

export default useTodoList;
