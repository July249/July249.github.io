import React, { startTransition, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import './app.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [topTodos, setTopTodos] = useState([]);

  // display the amount of current todos and stared todos on header
  const totalCount = todos.length;
  const starCount = topTodos.length;

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    localStorage.setItem('todos', JSON.stringify([...todos, todo]));
    setTodos(JSON.parse(localStorage.getItem('todos')));
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    const updatedArr = [...todos].map((item) =>
      item.id === todoId ? newValue : item
    );

    setTodos(updatedArr);
    localStorage.setItem('todos', JSON.stringify(updatedArr));
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);

    localStorage.setItem('todos', JSON.stringify(removedArr));

    const removedTopList = [...todos].filter(
      (todo) => todo.id !== id && todo.isMarked === true
    );

    setTopTodos(removedTopList);
    localStorage.setItem('stars', JSON.stringify(removedTopList));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const starTodo = (id) => {
    let markedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isMarked = !todo.isMarked;
      }
      return todo;
    });

    setTodos(markedTodos);
    localStorage.setItem('todos', JSON.stringify(markedTodos));

    const topTodos = [...todos].filter((todo) => todo.isMarked === true);

    setTopTodos(topTodos);
    localStorage.setItem('stars', JSON.stringify(topTodos));
  };

  useEffect(() => {
    if (localStorage.getItem('todos') === null)
      localStorage.setItem('todos', JSON.stringify(todos));

    const todoList = JSON.parse(localStorage.getItem('todos'));

    setTodos(todoList);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('stars') === null)
      localStorage.setItem('stars', JSON.stringify(topTodos));

    const topList = JSON.parse(localStorage.getItem('stars'));

    setTopTodos(topList);
  }, []);

  return (
    <>
      <header>
        <Navbar totalCount={totalCount} starCount={starCount} />
        <TodoInput onSubmit={addTodo} />
      </header>
      <section>
        <ul className="items">
          <TodoItem
            todos={todos}
            starTodo={starTodo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </ul>
      </section>
    </>
  );
};

export default App;
