import React, { useRef, useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);
  const dragTask = useRef(0);
  const draggedOverTask = useRef(0);

  useEffect(() => {
    setTaskList(tasks); // Update taskList when tasks prop changes
  }, [tasks]);

  const handleSort = () => {
    const taskListClone = [...taskList];
    const temp = taskListClone[dragTask.current];
    taskListClone[dragTask.current] = taskListClone[draggedOverTask.current];
    taskListClone[draggedOverTask.current] = temp;
    setTaskList(taskListClone);
  };

  return (
    <div>
      {taskList.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onDragStart={() => (dragTask.current = index)}
          onDragEnter={() => (draggedOverTask.current = index)}
          onDragEnd={handleSort}
        />
      ))}
    </div>
  );
};

export default TaskList;
