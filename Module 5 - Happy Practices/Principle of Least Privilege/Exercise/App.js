import React from 'react';

import CreateNewTodo from './CreateNewTodo';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = React.useState([]);

  function handleAddTodo(value) {
    setTodos((todos) => {
      return [
        ...todos,
        {
          value,
          id: crypto.randomUUID(),
        },
      ];
    });
  }

  function handleToggle(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <TodoList
          todos={todos}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
      <CreateNewTodo handleAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;