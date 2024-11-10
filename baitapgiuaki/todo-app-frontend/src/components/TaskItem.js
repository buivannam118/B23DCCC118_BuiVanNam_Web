import React from "react";
import axios from "axios";

const TaskItem = ({ task, setTasks }) => {
  const handleCompletionChange = () => {
    axios
      .patch(`http://localhost:5000/tasks/${task.id}/completed`, {
        isCompleted: !task.isCompleted,
      })
      .then((response) => {
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t.id === task.id ? response.data : t))
        );
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/tasks/${task.id}`)
      .then(() =>
        setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id))
      );
  };

  return (
    <li>
      <input
        type="radio"
        checked={task.isCompleted}
        onChange={handleCompletionChange}
      />
      {task.title}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
