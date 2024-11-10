const Task = require("../models/taskModel");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = await Task.createTask(title, description);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  try {
    const updatedTask = await Task.updateTask(id, title, description);
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.deleteTask(id);
    res.json({ message: "Task deleted", task: deletedTask });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCompletionStatus = async (req, res) => {
  const { id } = req.params;
  const { isCompleted } = req.body;
  try {
    const task = await Task.updateCompletionStatus(id, isCompleted);
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  updateCompletionStatus,
};
