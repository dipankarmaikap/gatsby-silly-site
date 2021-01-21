import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { SoundContext } from "../../contexts/SoundContext";
import PlayTodo from "./PlayTodo";
import { nanoid } from "nanoid";
export default function TodoItem({ todo }) {
  const { deleteTodo, findItem } = useContext(TodoContext);
  const { sound, startSpeaking } = useContext(SoundContext);
  const handelDelete = () => {
    if (sound) {
      startSpeaking(nanoid(), "Todo deleted");
    }
    deleteTodo(todo.id);
  };
  return (
    <article className="flex items-center mb-4">
      <p className="flex-auto text-lg truncate ">{todo.description}</p>
      <div className="flex-none	 buttons flex items-center space-x-2">
        {sound ? <PlayTodo id={todo.id} text={todo.description} /> : null}
        <button aria-label="Delete todo" onClick={handelDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <button aria-label="Edit todo" onClick={() => findItem(todo.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
