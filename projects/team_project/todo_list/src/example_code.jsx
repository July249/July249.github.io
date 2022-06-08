import React, { useState, useEffect } from "react";
import Template from "./components/Template";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./App.css";
import TodoInput from "./components/TodoInput";

// 기존코드에 원하시던 기능 구현해 둔 코드입니다. 참고용으로 사용하세용

const TodoBox = ({ todo, onDeleteTodo, onCheckToggle, onTextTodo, idx }) => {
  const [text, setText] = useState(todo.text);
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
    if (editMode) onTextTodo(text, idx);
  };

  return (
    <div style={{ display: "flex" }}>
      {todo.checked ? (
        <MdCheckBox onClick={() => onCheckToggle(idx)} />
      ) : (
        <MdCheckBoxOutlineBlank onClick={() => onCheckToggle(idx)} />
      )}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={!editMode}
      />
      <button onClick={() => onDeleteTodo(todo)}>X</button>
      <button onClick={handleEditMode}>{editMode ? "완료" : "수정"}</button>
    </div>
  );
};

const App = () => {
  //todos = 할 일 목록, setTodos = 할 일 목록 조작 함수
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    localStorage.setItem(
      "todos",
      JSON.stringify([...todos, { text: text, checked: false }])
    );
    setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  const handleDeleteTodo = (todo) => {
    const todoTemp = [...todos.filter((el) => el !== todo)];
    setTodos(todoTemp);
    localStorage.setItem("todos", JSON.stringify(todoTemp));
  };

  const handleCheckTodo = (idx) => {
    const todoTemp = [...todos];
    todoTemp[idx] = { ...todoTemp[idx], checked: !todoTemp[idx].checked };
    setTodos(todoTemp);
    localStorage.setItem("todos", JSON.stringify(todoTemp));
  };

  const handleTextTodo = (text, idx) => {
    const todoTemp = [...todos];
    todoTemp[idx] = { ...todoTemp[idx], text: text };
    setTodos(todoTemp);
    localStorage.setItem("todos", JSON.stringify(todoTemp));
  };

  useEffect(() => {
    if (localStorage.getItem("todos") === null)
      localStorage.setItem("todos", JSON.stringify(todos));
    const todoList = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoList);
  }, []);

  return (
    <>
      <Template />
      <TodoInput onSubmit={handleAddTodo} />
      {todos?.map((todo, idx) => {
        return (
          <TodoBox
            key={todo.text + idx}
            idx={idx}
            todo={todo}
            onDeleteTodo={handleDeleteTodo}
            onCheckToggle={handleCheckTodo}
            onTextTodo={handleTextTodo}
          />
        );
      })}
    </>
  );
};

export default App;
