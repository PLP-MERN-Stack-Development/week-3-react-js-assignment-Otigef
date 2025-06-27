import { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function addTask(task) {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task, completed: false }]);
    setInput('');
  }

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <div className="flex mb-4">
        <input
          className="flex-1 border rounded-l px-2 py-1"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-r"
          onClick={() => addTask(input)}
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between mb-2"
          >
            <span
              className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
              onClick={() => toggleTask(idx)}
            >
              {task.text}
            </span>
            <button
              className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteTask(idx)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    );
  }
  
  export default TaskManager;