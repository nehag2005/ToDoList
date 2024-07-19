import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

export function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setErrorMessages] = useState(null);

  // Generate a random number for new todos to generate every time
  const randomSkipInt = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    const fetchTodos = async () => {
      setFetching(true);

      try {
        const response = await fetch(
          `https://dummyjson.com/todos?limit=5&skip=${randomSkipInt}`
        );
        if (!response.ok) throw new Error('Failed to fetch todos');

        const parsedData = await response.json();
        console.log('Parsed Data:', parsedData);

        // Map the fetched data to match the structure your app expects
        const formattedTodos = parsedData.todos.map((todo) => ({
          id: todo.id,
          text: todo.todo,
          completed: todo.completed,
        }));

        setTodos(formattedTodos);
        console.log('Successfully fetched todos...');
      } catch (error) {
        setErrorMessages(error.message);
        console.error('Error fetching todos:', error);
      } finally {
        setFetching(false);
      }
    };

    fetchTodos();
  }, []);

  //Add a new todo and print to console

  const addTodo = async (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);

    console.log(newTodos);
  };

  // Remove Todo
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  // Update Todo
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // When a todo is completed

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
      <ToDoItem
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default ToDoList;
