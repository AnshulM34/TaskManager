import { TaskEntity } from "./task.interface";

const Task = require('./Task');

export const getTasks = async(): Promise<TaskEntity[]> => await Task.find();

export const insertTask = (title: string, description: string) => {
  try{
    const newTask = new Task({title: title, description: description, status: "todo"})
    newTask.save();
  }catch(err) {
    //log ex,message
    throw err;
  }
}

export const updateTaskStatus = async (taskId: string) => {
  try {
    await Task.findByIdAndUpdate(taskId) //updatestatus to done
  }catch(err) {

  }
}

export const deleteTask = async (taskId: string) => {
  try {
    await Task.findByIdAndDelete(taskId);
  } catch(err) {
    //log ex,message
    throw err;
  }
}