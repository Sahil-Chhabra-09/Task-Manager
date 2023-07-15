const Task = require("../models/Tasks");

const getAllTasks = (req, res) => {
  res.send("All items");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
  } catch (error) {
    res.status(400).send("some validation checks failed");
  }
  res.status(201).json({ task });
};

const getSingleTask = (req, res) => {
  res.send("Single item");
};

const updateTask = (req, res) => {
  res.send("updated task ");
};

const deleteTask = (req, res) => {
  res.send("Deleted task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
