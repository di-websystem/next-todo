import type React from 'react';
import TodoListLabel from '../atoms/TodoListLabel';

type TodoListItemProps = {
  item: {
    id: number;
    item: string;
  };
};

const TodoListItem: React.FC<TodoListItemProps> = ({ item }) => {
  return (
    <li>
      <TodoListLabel text={`${item.item}${item.id}`} />
      <input type="checkbox" name="" id="" />
    </li>
  );
};

export default TodoListItem;
