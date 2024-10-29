import React, { useState } from 'react'
import Form from './Form';
import TodoList from './TodoList';
import FooterComponent from './FooterComponent';

function Todo() {
  const [todos,setTodos]=useState([]);
  const completedTodos=todos.filter((todo)=>todo.done).length //done item will be returned(count total)
  const totalTodos=todos.length;
  
  return (
    <div>
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <FooterComponent completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
  )
}

export default Todo
