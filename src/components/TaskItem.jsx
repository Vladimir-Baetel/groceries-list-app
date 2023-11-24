const TaskItem = ({ task, onDragStart, onDragEnter, onDragEnd }) => {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
    >
      {task.name}
    </div>
  );
};

export default TaskItem;
