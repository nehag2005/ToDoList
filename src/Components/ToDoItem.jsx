'use client';
import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import ToDoForm from './ToDoForm';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

export function ToDoItem({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  return (
    <div className="">
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button outline>
              <MdDelete className="h-6 w-6" />
            </Button>
            <Button outline>
              <FaEdit className="h-6 w-6" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoItem;
