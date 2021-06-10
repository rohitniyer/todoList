import React from "react";
import Todo from "./Todo";
function TodoList({ todos, setTodos, filteredTodos }) {
  console.log("indisde todolist", todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo key={todo.id} {...todo} todos={todos} setTodos={setTodos} />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
