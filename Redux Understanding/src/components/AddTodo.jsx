import React, { useState } from "react";
import { addTodo } from "../features/Todo/TodoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-2 p-4 bg-black rounded-lg shadow-md w-full max-w-md mx-auto"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your todo..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
