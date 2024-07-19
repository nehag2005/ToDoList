/* eslint-disable react/prop-types */
'use client';
import React, { useState } from 'react';
import { Button, Card } from 'flowbite-react';
import ToDoForm from './ToDoForm';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

/**
 * ToDoItem Component
 * Renders a list of todo items and provides functionalities to complete, remove, or edit todos.
 *
 * @param {Object} parameters - Component properties
 * @param {Array} parameters.todos - List of todos to be displayed
 * @param {Function} parameters.completeTodo - Function to mark a todo as complete/incomplete
 * @param {Function} parameters.removeTodo - Function to remove a todo
 * @param {Function} parameters.updateTodo - Function to update a todo's text
 */

export function ToDoItem({ todos, completeTodo, removeTodo, updateTodo }) {
  // State to handle editing a todo
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  /**
   * Handles submission of updated todo value
   * @param {Object} value - Updated todo data
   */
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    // Reset edit state after update
    setEdit({
      id: null,
      value: '',
    });
  };

  // If there is an item being edited, show the ToDoForm for editing
  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  // Render the list of todos
  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      {todos.map((todo, index) => (
        <Card
          key={index} // Unique key for React list rendering
          className="max-w-sm w-full p-0 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Display todo text with styling and click handler to toggle completion */}
          <div
            className={`flex items-center justify-between ${
              todo.isComplete ? 'line-through opacity-20' : ''
            }`}
          >
            <div
              className="flex-grow text-left cursor-pointer text-md font-medium"
              onClick={() => completeTodo(todo.id)}
            >
              {todo.text}
            </div>
            {/* Action buttons for deleting and editing the todo */}
            <div className="flex justify-end ">
              <Button
                outline
                onClick={() => removeTodo(todo.id)}
                className="mx-1"
                size="xs"
                gradientDuoTone="purpleToBlue"
              >
                <MdDelete className="h-4 w-4 " />
              </Button>
              <Button
                outline
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="mx-1"
                size="xs"
                gradientDuoTone="purpleToBlue"
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
