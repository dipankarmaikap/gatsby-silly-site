import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { nanoid } from "nanoid";
const defaultState = [];

export const TodoContext = createContext(defaultState);

export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", [
    { id: "1", description: "Water the plants", completed: false },
    { id: "2", description: "Go to the gym", completed: false },
    {
      id: "3",
      description: "Watch gatsby webainer",
      completed: false,
    },
    {
      id: "4",
      description: "Write a blog about web development",
      completed: false,
    },
  ]);
  const [editItem, setEditItem] = useState(null);
  const findItem = (id) => {
    const item = todos.find((item) => item.id === id);
    setEditItem(item);
  };
  const editTodo = (description, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { description, id } : todo
    );
    setTodos(newTodos);
    setEditItem(null);
  };
  const addTodo = (description) => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        description,
        completed: false,
      },
    ]);
  };
  const clearTodos = () => {
    setTodos([]);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        clearTodos,
        findItem,
        editTodo,
        editItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
