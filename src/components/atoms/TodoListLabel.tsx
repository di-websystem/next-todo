import type React from 'react';

type TodoListLabelProps = {
  text: string;
};

const TodoListLabel: React.FC<TodoListLabelProps> = ({ text }) => {
  return <span>{text}</span>;
};

export default TodoListLabel;
