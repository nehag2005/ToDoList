# ToDo List Application

## Overview

The Todo List App is a React-based application designed to manage a list of todos. It allows users to add, update, complete, sort and delete todos. The app fetches initial todo data from a dummy API and provides a user-friendly interface for managing tasks.


## Depolyment
[Vercel Deployment Link](https://to-do-list-6p35dnqez-nehag2005s-projects.vercel.app)

## Technologies
- React + Vite
- DummyJSON API
- Flowbite React
- Tailwind CSS

## Steps to locally run the application

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies using "npm install."
4. Start the server using "npm run dev."


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
- Purpose: Provides a form for adding or updating todo items.
- Features: Conditionally renders form fields and buttons based on whether a todo is being added or updated.
  
2. ToDoItem
- Purpose: Renders individual todo items and allows actions such as marking as complete, deleting, or editing.
- Features: Displays todos with styling and action buttons for each todo.

3. ToDoList
- Purpose: Manages the state of todos and interacts with the API to fetch, add, update, complete, and remove todos.
- Features:
  1. Fetches todos from an API and updates state.
  2.  Handles adding, updating, completing, and removing todos.
  3.  Sorts todos with incomplete ones appearing first.
 






