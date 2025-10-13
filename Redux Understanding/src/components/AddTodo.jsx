import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/Todo/TodoSlice";

function AddTodo({ editingTodo, setEditingTodo }) {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingTodo) setTodo(editingTodo.todo);
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, todo }));
      setEditingTodo(null);
    } else {
      dispatch(addTodo(todo));
    }

    setTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center gap-2 p-4 bg-white rounded-lg shadow-md w-full max-w-md mx-auto"
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
        className={`px-6 py-2 text-white rounded-md transition ${
          editingTodo
            ? "bg-green-500 hover:bg-green-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
