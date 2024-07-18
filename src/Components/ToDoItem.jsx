/* eslint-disable react/prop-types */
'use client';
import React, { useState } from 'react';
import { Button, Card } from 'flowbite-react';
import ToDoForm from './ToDoForm';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

export function ToDoItem({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  // Update todo
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  //Completion, delete and modify functionalities

  return (
    <div className="flex flex-col items-center mt-8 space-y-2">
      {todos.map((todo, index) => (
        <Card key={index} className="max-w-sm w-full p-0">
          <div
            className={`flex items-center justify-between ${
              todo.isComplete ? 'line-through opacity-20' : ''
            }`}
          >
            <div
              className="flex-grow cursor-pointer"
              onClick={() => completeTodo(todo.id)}
            >
              {todo.text}
            </div>
            <div className="flex justify-end ">
              <Button
                outline
                onClick={() => removeTodo(todo.id)}
                className="mx-1"
                size="xs"
              >
                <MdDelete className="h-4 w-4" />
              </Button>
              <Button
                outline
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="mx-1"
                size="xs"
              >
                <FaEdit className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ToDoItem;
