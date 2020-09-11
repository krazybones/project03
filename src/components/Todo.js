import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      {/* span the next 3 lines to 1 */}
      <li
        style={{ listStyle: "none" }}
        className={`todo-item ${todo.completed ? "completed" : ""}`}
      >
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        Complete
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        Delete
      </button>
    </div>
  );
};

export default Todo;
