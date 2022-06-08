import React, { useState } from 'react';
import TodoInput from './TodoInput';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';

const TodoItem = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoInput edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {props.todos.map((todo, index) => {
        if (todo.isMarked) {
          const storedItems = JSON.parse(localStorage.getItem('stars'));
          return (
            <li
              key={index}
              className={`content ${
                storedItems.length === 0
                  ? 'unprimary itemRow'
                  : 'primary itemRow'
              }`}
            >
              <div key={todo.id} className="text">
                {todo.isComplete ? (
                  <MdCheckBox onClick={() => props.completeTodo(todo.id)} />
                ) : (
                  <MdCheckBoxOutlineBlank
                    onClick={() => props.completeTodo(todo.id)}
                  />
                )}
                {todo.isMarked ? (
                  <AiFillStar onClick={() => props.starTodo(todo.id)} />
                ) : (
                  <AiOutlineStar onClick={() => props.starTodo(todo.id)} />
                )}
                {todo.text}
              </div>
              <span className="icons">
                <MdEdit
                  onClick={() => setEdit({ id: todo.id, value: todo.text })}
                  className="edit"
                />
                <MdDeleteForever
                  onClick={() => props.removeTodo(todo.id)}
                  className="delete"
                />
              </span>
            </li>
          );
        }
      })}
      <hr size="10px" noshade="true"></hr>
      {props.todos.map((todo, index) => {
        if (!todo.isMarked) {
          return (
            <li
              key={index}
              className={`content ${
                todo.isComplete ? 'nostar itemRow complete' : 'nostar itemRow'
              }`}
            >
              <div key={todo.id} className="text">
                {todo.isComplete ? (
                  <MdCheckBox onClick={() => props.completeTodo(todo.id)} />
                ) : (
                  <MdCheckBoxOutlineBlank
                    onClick={() => props.completeTodo(todo.id)}
                  />
                )}
                {todo.isMarked ? (
                  <AiFillStar onClick={() => props.starTodo(todo.id)} />
                ) : (
                  <AiOutlineStar onClick={() => props.starTodo(todo.id)} />
                )}
                {todo.text}
              </div>
              <span className="icons">
                <MdEdit
                  onClick={() => setEdit({ id: todo.id, value: todo.text })}
                  className="edit"
                />
                <MdDeleteForever
                  onClick={() => props.removeTodo(todo.id)}
                  className="delete"
                />
              </span>
            </li>
          );
        }
      })}
      ;
    </>
  );
};

export default TodoItem;
