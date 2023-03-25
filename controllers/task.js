import { trace } from "console";
import ErrorHandler, { errorMiddleware } from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.json({
        success: false,
        message: "Please Enter Title and Description",
      });
    }
    await Task.create({ title, description, user: req.user });

    res.status(201).json({
      success: true,
      message: "Task added successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyTasks = async (req, res,next) => {
  try {
    const userId = req.user._id;

    const tasks = await Task.find({ user: userId });

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.find({ _id: id });

    task.isCompleted = !task.isCompleted;

    //To save the updated object in DB :)
    await task.save();

    res.status(200).json({
      success: true,
      message: "Task updated Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler("Task not found", 404));
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "Task deleted Successfully",
    });
  } catch (error) {
    return next(new ErrorHandler("Task not found", 404));
  }
};
