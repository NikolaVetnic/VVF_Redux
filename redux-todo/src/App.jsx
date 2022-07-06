import React from "react";
import "./App.css";
import ToDoList from "./features/toDoList/ToDoList";

function App() {
    return (
        <div className="App">
            <h1>ToDo App</h1>
            <ToDoList />
        </div>
    );
}

export default App;
