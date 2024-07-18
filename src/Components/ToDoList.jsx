import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

export function ToDoList() {
  const [todos, setTodos] = useState([
    {
      id: 20,
      text: 'LOL SUMMER',
    },
  ]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);

    console.log(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <ToDoForm onSubmit={addTodo} />
      <ToDoItem todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default ToDoList;
