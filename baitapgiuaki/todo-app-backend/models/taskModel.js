const db = require("../config/db");

const getAllTasks = async () => {
  const [rows] = await db.execute("SELECT * FROM tasks");
  return rows;
};

const createTask = async (title, description) => {
  const [result] = await db.execute(
    "INSERT INTO tasks (title, description, isCompleted) VALUES (?, ?, ?)",
    [title, description, false]
  );
  return { id: result.insertId, title, description, isCompleted: false };
};

const updateTask = async (id, title, description) => {
  await db.execute("UPDATE tasks SET title = ?, description = ? WHERE id = ?", [
    title,
    description,
    id,
  ]);
  return { id, title, description };
};

const deleteTask = async (id) => {
  await db.execute("DELETE FROM tasks WHERE id = ?", [id]);
  return { id };
};

const updateCompletionStatus = async (id, isCompleted) => {
  await db.execute("UPDATE tasks SET isCompleted = ? WHERE id = ?", [
    isCompleted,
    id,
  ]);
  return { id, isCompleted };
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  updateCompletionStatus,
};
