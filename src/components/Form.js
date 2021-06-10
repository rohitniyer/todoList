import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); // when we cliock submit it automaticall refreshes the page and we are back to the inital stage of our project
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        // value="messi" //you cant change the value to anything else, you cant change the value field as it is fixed to messi
        // if you remove value property inside input tag then you  can type whatever you want whatever value is inside value property
        // is going to sta fixed unless you write onChange function and setInput Text handler to e.target.value
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" onChange={statusHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
