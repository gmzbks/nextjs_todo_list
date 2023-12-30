'use client'
import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import { Data } from './components/types/Types';

const Home: React.FC = () => {
  const [addTodo, setAddTodo] = useState<string>('');
  const [todos, setTodos] = useState<Data[]>([]);


  const addText =()=>{
    setTodos((todos) => [...todos,{text:addTodo, id:todos.length+1, done:false}
    ])
    setAddTodo('')
  }

  return (
    <main className='home'>
      <h1 className='title'>Todo List</h1>
      <AddTask addTodo={addTodo} setAddTodo={setAddTodo} addText={addText}  />
      <TodoList  todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default Home;
