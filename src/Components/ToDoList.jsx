import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

/**
 * ToDoList Component
 * Manages and displays a list of todo items, including fetching, adding, updating, completing, and removing todos.
 *
 * @component
 */
export function ToDoList() {
  const [todos, setTodos] = useState([]);

  const [fetching, setFetching] = useState(false);

  const [error, setErrorMessages] = useState(null);

  /**
   * Fetches todos from the API and updates the component state
   * Runs once when the component mounts
   */
  useEffect(() => {
    const fetchTodos = async () => {
      setFetching(true);

      // Generate a random number for the skip parameter to get different sets of todos
      const randomSkipInt = Math.floor(Math.random() * 10) + 1;

      try {
        // Fetch todos from the API
        const response = await fetch(
          `https://dummyjson.com/todos?limit=5&skip=${randomSkipInt}`
        );
        if (!response.ok) throw new Error('Failed to fetch todos');

        const parsedData = await response.json();
        console.log('Parsed Data:', parsedData);

        // Map the fetched data to match the expected structure
        const formattedTodos = parsedData.todos.map((todo) => ({
          id: todo.id,
          text: todo.todo,
          isComplete: todo.completed,
        }));

        // Update the state with the formatted todos
        setTodos(formattedTodos);
        console.log('Successfully fetched todos...');
      } catch (error) {
        // Error message =
        setErrorMessages(error.message);
        console.error('Error fetching todos:', error);
      } finally {
        setFetching(false);
      }
    };

    fetchTodos();
  }, []);

  /**
   * Adds a new todo to the list
   * @param {Object} todo - New todo item
   */
  const addTodo = async (todo) => {
    // Check if the todo text is valid
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);

    console.log(newTodos);
  };

  /**
   * Removes a todo by its ID
   * @param {number} id - ID of the todo to remove
   */
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  /**
   * Updates the text of an existing todo
   * @param {number} todoId - ID of the todo to update
   * @param {Object} newValue - Object containing the new text for the todo
   */
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  /**
   * Toggles the completion status of a todo
   * @param {number} id - ID of the todo to toggle
   */
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  // Sort todos with incomplete ones first
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.isComplete) - Number(b.isComplete));

  return (
    <div>
      {/* Form to add or update todos */}
      <ToDoForm onSubmit={addTodo} />

      {/* Display the list of todos */}
      <ToDoItem
        todos={sortedTodos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default ToDoList;
