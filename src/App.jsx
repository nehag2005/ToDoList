import React from 'react';
import './App.css';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-title">
          <h1 className="ext-xl sm:text-lg md:text-base lg:text-lg xl:text-lg font-bold text-gray-900 text-center mx-4">
            Todo List App
          </h1>
        </header>
        <main className="App-main">
          <ToDoList />
        </main>
      </div>
    </>
  );
}

export default App;
