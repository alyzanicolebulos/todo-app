import React, { useState } from 'react';

function TodoItem({ todo, index, updateTodo, toggleComplete, removeTodo, toggleEdit }) {
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    updateTodo(index, editText);
  };

  return (
    <li className="todo-item">
      {todo.isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      )}

      <div className="actions">
        {todo.isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <>
            <button onClick={() => toggleComplete(index)} disabled={todo.isEditing}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => toggleEdit(index)} disabled={todo.completed}>
              Edit
            </button>
            <button onClick={() => removeTodo(index)} disabled={todo.completed}>
              Remove
            </button>
          </>
        )}
        
        {todo.isEditing && (
          <>
            <button onClick={() => toggleComplete(index)} disabled>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => toggleEdit(index)} disabled>
              Edit
            </button>
            <button onClick={() => removeTodo(index)} disabled>
              Remove
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
