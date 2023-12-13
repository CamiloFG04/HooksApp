import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-UseReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    dispatch({ type: "[TODO] Add Todo", payload: todo });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "[TODO] Remove Todo", payload: id });
  };
  const handleToggleTodo = (id) => {
    // console.log(id);
    dispatch({ type: "[TODO] Toggle Todo", payload: id });
  };
  

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
