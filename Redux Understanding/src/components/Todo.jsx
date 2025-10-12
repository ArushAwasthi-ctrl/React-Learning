import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { removeTodo } from "../features/Todo/TodoSlice";
function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-black rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Todo List</h2>

      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No todos yet.</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition"
            >
              <span className="text-gray-800">{todo.todo}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
