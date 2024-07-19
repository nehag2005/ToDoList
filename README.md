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
 
## Challenges and Solutions
1. Understanding and Using React
Challenge: I was new to React and its component-based architecture. Learning how to structure components, manage state, and handle user interactions was initially confusing.

Solution: I started by following online tutorials and documentation. I experimented with simple examples and gradually applied what I learned to this project. Understanding the concept of components and props helped me build the app's functionality.

2. Using an API
Challenge: I had no prior experience with APIs. I was unsure how to use an API to fetch, add, delete, and update ToDo items. The task required server-side API work, which felt like a lot of work given my limited experience.

Solution: I used online resources to learn about the fetch API and asynchronous operations in JavaScript. To simplify the task and fit within the time constraints, I focused on implementing the fetching of data. This approach allowed me to get initial todo items when the app starts. Although I didn't fully integrate all API functionalities like adding, deleting, and updating todos, this foundational step gave me a solid start. With more time, I believe I could have integrated these additional features and handled more complex API interactions.

3. Conditional Rendering
Challenge: Implementing conditional rendering to switch between adding and updating todos was tricky. I needed to ensure that the form displayed the correct fields and buttons based on the current action.

Solution: I used conditional logic within the ToDoForm component to check if an item was being edited or added. This approach allowed me to show the appropriate labels and buttons based on the action. This was a valuable learning experience in managing component states and rendering conditions dynamically.





