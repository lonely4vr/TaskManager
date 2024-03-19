import React, { useState } from 'react';

function TaskManager() {
  // define a state tasks using useState hook
  const [tasks, setTasks] = useState([]);  // intialize with an empty array

  // function to add a new task
  const addTask = () => {
    const newTask = { id: Date.now(), title: "New Task", completed: false };
    setTasks([...tasks, newTask]); // updating state immutably, use spread syntax to create a new array
  };

  // function to toggle completion status of a task
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task => { // use .map() to iterate over tasks array
      if (task.id === taskId) { // if the current id matches taskId passed to the function then
        return { ...task, completed: !task.completed }; // create a new task
      }
      return task;
    });
    setTasks(updatedTasks); // updating state 
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
