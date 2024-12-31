'use client'

import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Todo = {
  id: string;
  title: string;
  description?: string;
  isComplete: boolean;
  dueDate?: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Fetch all todos from the API
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('/api/todo');
      const data = await res.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  // Handle creating a new todo
  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = { title, description, dueDate };
    const res = await fetch('/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    if (res.ok) {
      const createdTodo = await res.json();
      setTodos((prevTodos) => [...prevTodos, createdTodo]);
      setTitle('');
      setDescription('');
      setDueDate('');
      toast.success('Todo added successfully!');
    } else {
      toast.error('Failed to create todo');
    }
  };

  // Handle deleting a todo
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch('/api/todo', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        toast.success('Todo deleted successfully!');
      } else {
        toast.error('Failed to delete todo');
      }
    } catch (error) {
      toast.error('An error occurred while deleting the todo');
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>

      {/* Form to create a new todo */}
      <form onSubmit={handleCreate} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Todo
        </button>
      </form>

      {/* Todo Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left text-sm font-semibold text-gray-700">Title</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700">Description</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700">Due Date</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} className="border-t">
                <td className="p-3">{todo.title}</td>
                <td className="p-3">{todo.description}</td>
                <td className="p-3">{todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : 'N/A'}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TodoList;
