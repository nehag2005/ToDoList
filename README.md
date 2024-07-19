# ToDo List Application

## Overview

The Todo List App is a React-based application designed to manage a list of todos. It allows users to add, update, complete, sort and delete todos. The app fetches initial todo data from a dummy API and provides a user-friendly interface for managing tasks.

## Technologies
- React + Vite
- DummyJSON API
- Flowbite React
- Tailwind CSS

## Features
- Add Todos: Users can add new todos.
- Edit Todos: Users can update existing todos.
- Complete/Incomplete Todos: Users can strike through todos to mark them as complete or incomplete.
- Sort Todos: The recently striked todos are placed at the end of the list.
- Remove Todos: Users can delete todos.
- Responsive Design: The application is styled to be responsive and user-friendly.


## Project Structure

- src/: Contains the source code for the application.
- App.js: Main component that renders the ToDoList.
- components/: Contains React components used in the application.
  1. ToDoForm.jsx
  2. ToDoItem.jsx
  3. ToDoList.jsx

## Components
1. ToDoForm
Purpose: Provides a form for adding or updating todo items.
Props:
- onSubmit: Function to handle form submission.
- edit (optional): Object containing the todo item being edited.
Features:
- Conditionally renders form fields and buttons based on whether a todo is being added or updated.
  
2. ToDoItem
Purpose: Renders individual todo items and allows actions such as marking as complete, deleting, or editing.
Props:
- todos: List of todos to display.
- completeTodo: Function to toggle the completion status.
- removeTodo: Function to remove a todo.
- updateTodo: Function to update a todo's text.
Features:
Displays todos with styling and action buttons for each todo.

3. ToDoList
Purpose: Manages the state of todos and interacts with the API to fetch, add, update, complete, and remove todos.
State:
- todos: List of todos.
- fetching: Indicates if data is being fetched.
- error: Stores error messages.
Features:
- Fetches todos from an API and updates state.
- Handles adding, updating, completing, and removing todos.
- Sorts todos with incomplete ones appearing first.





