import { useState } from "react";

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <p>{task}</p>
      <div className="w-96 h-96 bg-slate-100">
        <input
          className="border-2"
          type="text"
          id="task"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          required
        />
        <label htmlFor="task">Enter Task</label>
      </div>
      <button className="bg-slate-200 px-8" aria-label="Add Task" type="submit">
        +
      </button>
    </form>
  );
};

export default CustomForm;
