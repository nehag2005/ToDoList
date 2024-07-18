import React, { useState } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';

export function ToDoForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() !== '') {
      onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
      });

      setInput(''); // Clear input after submission
    }
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
              <Label htmlFor="base" value="Enter a todo list item" />
            </div>
            <div className="flex items-center gap-2">
              <TextInput
                id="base"
                type="text"
                sizing="md"
                className="flex-grow"
                value={input}
                onChange={handleChange}
              />
              <Button onClick={handleSubmit}>Add</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;
