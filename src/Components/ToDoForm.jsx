/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';

export function ToDoForm({ onSubmit, edit = null }) {
  const [input, setInput] = useState(edit ? edit.value : '');

  //Focus on a specific input

  const focusInput = useRef(null);

  useEffect(() => {
    focusInput.current.focus();
  });

  // Handle change and submission
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: edit ? edit.id : Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput(''); // Clear input after submission
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
              <Button onClick={handleSubmit}>{edit ? 'Update' : 'Add'}</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;
