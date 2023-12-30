import React from 'react';
import { ImBin2 } from "react-icons/im";
import { Data } from './types/Types';


interface Props {
  todos: Data[];
  setTodos: React.Dispatch<React.SetStateAction<Data[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {

  const doneTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='todos'>
      {todos.map((todo) => (
        <div className='todolist' key={todo.id}>
          <div className='todolist'>
            <input className='checkbox' type="checkbox" checked={todo.done} onChange={() => doneTodo(todo.id)} />
            <div  onClick={() => doneTodo(todo.id)} className={todo.done ? 'line-through cursor-pointer' : 'cursor-pointer'}>
              {todo.text}
            </div>
          </div>
          
          <div className='todolist-button'>
            <button onClick={() => deleteTodo(todo.id)}><ImBin2 /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

