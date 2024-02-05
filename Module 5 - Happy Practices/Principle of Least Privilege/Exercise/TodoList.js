import React from 'react';
import { X } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';

function TodoList({ todos, handleToggle, handleDelete }) {
  return (
    <ol className="todo-list">
      {todos.map(({ id, value, isCompleted }) => (
        <li key={id}>
          <button
            className={`
              toggle
              ${isCompleted ? 'completed' : undefined}
            `}
            onClick={() => {
              handleToggle(id);
            }}
            aria-label="toggle item"
          >
            {value}
            {isCompleted && (
              <VisuallyHidden> (Completed)</VisuallyHidden>
            )}
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              handleDelete(id);
            }}
          >
            <X />
            <VisuallyHidden>Delete Item</VisuallyHidden>
          </button>
        </li>
      ))}
    </ol>
  );
}

export default TodoList;