import React, { useState, useEffect } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {
  // Load tasks from local storage or use an empty array if there are no tasks
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialTasks);

  // useEffect to save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div>
      <h1>My Task List</h1>
      <CustomForm addTask={addTask} />
      {tasks.length > 0 && <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;
