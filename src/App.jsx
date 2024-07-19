import React from 'react';
import './App.css';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-app-background">
        <div className="bg-customBlue border border-gray-300 rounded-lg shadow-lg p-6 max-w-lg w-full">
          <header className="App-title">
            <h1 className="ext-xl sm:text-lg md:text-base lg:text-lg xl:text-lg font-bold text-white text-center mx-4">
              Todo List App
            </h1>
          </header>
          <main className="App-main">
            <ToDoList />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
