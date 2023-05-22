import { Request, Response } from "express";
import { Task } from '../models/task'

async function getTasks(req: Request, res: Response) {
try {
  const tasks = await Task.find();
  res.send(tasks)
} catch (error) {
  res.status(500).json({
    message: 'Error',
    error
  })
}
}

async function getTaskById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.send(task)
  } catch (error) {
    res.status(500).json({
      message: 'Error',
      error
    })
  }
}

async function addTasks(req: Request, res: Response) {
  try {
    const { task, done } = req.body;
    if (!task) throw new Error('Task is required')
    const newTask = new Task({
      task,
      done
    });
    await newTask.save();
    res.send(newTask)
  } catch (error) {
    res.status(500).json({
      message: 'Error',
      error
    })
  }
}

async function updateTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { task, done} = req.body;
    const updateTask = await Task.findByIdAndUpdate(id, { task, done }, { new: true });
    res.send(updateTask)
  }
  catch (error) {
    res.status(500).json({
      message: 'Error',
      error
    })
  }
}

async function deleteTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.send({ message: `Task ${id} deleted` })
  } catch (error) {
    res.status(500).json({
      message: 'Error',
      error
    })
  }
}


export { getTasks, addTasks, updateTask, getTaskById, deleteTask }