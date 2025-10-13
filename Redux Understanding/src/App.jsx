import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./app/Store";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center mb-6">React Redux Todo App</h1>
        <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
        <Todo setEditingTodo={setEditingTodo} />
      </div>
    </Provider>
  );
}

export default App;
