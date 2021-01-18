import { NextPage } from 'next';
import React from 'react';
import { Transition } from 'react-transition-group';
import useSWR from 'swr';
import { fetcher, fetcherOption } from '../common/fetch';
import Title from '../components/atoms/Title';
import Toast from '../components/atoms/Toast';
import TodoListItem from '../components/molecules/TodoListItem';
import useAnimation from '../hooks/animation';
import useTodoList from '../hooks/todo';

const Index: NextPage = () => {
  const { data, error } = useSWR('/api/todo', fetcher, fetcherOption);

  const { animate } = useAnimation();

  const { addTodoList, inputEl } = useTodoList();

  if (error) {
    return <main>error</main>;
  }

  if (!data) {
    return <main>loading...</main>;
  }

  return (
    <main>
      <Title>TODO</Title>

      <section>
        <input ref={inputEl} type="text" />
        <button onClick={() => addTodoList(data)}>submit</button>
      </section>

      <section>
        <ul>
          {data.map((task: { id: number; item: string }) => {
            return task.item && <TodoListItem key={task.id} item={task} />;
          })}
        </ul>
      </section>

      <Transition in={animate} timeout={500}>
        {(state) => <Toast state={state}>add success</Toast>}
      </Transition>
    </main>
  );
};

export default Index;
