import React, { useState, useEffect, useRef } from 'react';
import { MdAddBox } from 'react-icons/md';

const TodoInput = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    // Clear in the input area after submit
    setInput('');
  };

  return (
    <form className="TodoInput" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder=""
            value={input}
            onChange={handleChange}
            name="text"
            className="TodoInput edit"
            ref={inputRef}
          />
          <MdAddBox className="TodoAddButton edit" onClick={handleSubmit} />
        </>
      ) : (
        <>
          <input
            placeholder="할 일을 입력하세요"
            value={input}
            onChange={handleChange}
            name="text"
            className="TodoInput"
            ref={inputRef}
          />
          <MdAddBox className="TodoAddButton edit" onClick={handleSubmit} />
        </>
      )}
    </form>
  );
};

export default TodoInput;
