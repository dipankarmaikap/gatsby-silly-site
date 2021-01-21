import React, { useContext } from "react";
import TodoItem from "./TodoItem.js";
import { TodoContext } from "../../contexts/TodoContext";
export default function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <section className="todo-list">
      {todos.length ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className="text-center p-8">No todos found</p>
      )}
    </section>
  );
}
