import React, { useContext, useState, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { SoundContext } from "../../contexts/SoundContext";
import { nanoid } from "nanoid";
export default function TodoForm() {
  const [description, setDescription] = useState("");
  const { addTodo, clearTodos, editTodo, editItem } = useContext(TodoContext);
  const { sound, startSpeaking } = useContext(SoundContext);
  const handelSubmit = () => {
    if (!editItem) {
      if (sound) {
        startSpeaking(nanoid(), "New Todo Added");
      }
      addTodo(description);
      setDescription("");
    } else {
      if (sound) {
        startSpeaking(nanoid(), "Todo Edited");
      }
      editTodo(description, editItem.id);
    }
  };
  useEffect(() => {
    if (editItem) {
      setDescription(editItem.description);
    } else {
      setDescription("");
    }
  }, [editItem]);
  return (
    <div className="todo-form max-w-sm mx-auto my-8">
      <label aria-label="todo" htmlFor="todo" className="sr-only">
        Add todo
      </label>
      <input
        className="w-full rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 smooth text-gray-900"
        type="text"
        name="todo"
        id="todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add todo..."
      />
      <div className="buttons flex justify-center mt-4 space-x-3">
        <button
          onClick={handelSubmit}
          className="bg-gray-700 text-gray-100 rounded px-4 py-1"
          aria-label={editItem ? "Edit todo" : "Add todo"}
        >
          {editItem ? "Edit todo" : "Add todo"}
        </button>
        <button
          onClick={clearTodos}
          className="bg-gray-700 text-gray-100 rounded px-4 py-1"
          aria-label="Clear all todos"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
