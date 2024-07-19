/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';

/**
 * ToDoForm Component
 * Provides a form to add or update todo items.
 *
 * @param {Object} parameters - Component properties
 * @param {Function} parameters.onSubmit - Function to handle form submission
 * @param {Object} [parameters.edit=null] - Data for the todo item being edited (if any)
 */
export function ToDoForm({ onSubmit, edit = null }) {
  const [input, setInput] = useState(edit ? edit.value : '');

  // Ref to focus the input field automatically
  const focusInput = useRef(null);

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  /**
   * Handles changes in the input field
   * @param {Object} e - Event object
   */
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  /**
   * Handles form submission
   * @param {Object} e - Event object
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: edit ? edit.id : Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-4 bg-white rounded-lg shadow-md mt-8"
      >
        <div className="flex flex-col gap-4">
          <div className="text-left">
            <div className="mb-2 block">
              <Label
                htmlFor="base"
                value={edit ? 'Modify your item: ' : 'Add a todo list item:'}
              />
            </div>
            <div className="flex items-center gap-2">
              <TextInput
                id="base"
                type="text"
                sizing="md"
                className="flex-grow"
                value={input}
                onChange={handleChange}
                ref={focusInput}
              />
              <Button onClick={handleSubmit} color="blue">
                {edit ? 'Update' : 'Add'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;
