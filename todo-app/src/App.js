// App.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';
import todobeads from './todobeads.png';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false, isEditing: false }]);
      setNewTodo("");
    }
  };

  const updateTodo = (index, updatedText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = updatedText;
    updatedTodos[index].isEditing = false;
    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isEditing = !updatedTodos[index].isEditing;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <img src={todobeads} alt="To Do" className="todo-header" />

        
        <div className="todo-input-container">
          <input
            type="text"
            placeholder="Add a todo..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        {todos.length === 0 ? (
          <p>No to-do's available. <br />Add a to-do to get started!<br /></p>
        ) : (
          <ul>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                updateTodo={updateTodo}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
                toggleEdit={toggleEdit}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
