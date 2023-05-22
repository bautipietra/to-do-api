import { Schema, model } from 'mongoose';
import { ITask } from '../interface/task';

const taskSchema = new Schema<ITask>({
  task: { type: String, required: true },
  done: { type: Boolean, default: false }
});

const Task = model<ITask>('Task', taskSchema);

export { Task }