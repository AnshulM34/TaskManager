import { TaskEntity } from "./task.interface";

const Task = require('./Task');

let tasks: TaskEntity[] = [
  {
    "id": "1",
    "title": "task1",
    "description": "task1 discription",
    "status": "todo"
  },
  {
    "id": "2",
    "title": "task2",
    "description": "task2 discription",
    "status": "todo"
  },
  {
    "id": "3",
    "title": "task3",
    "description": "task3 discription",
    "status": "todo"
  }
]

export const getTasks = async(): Promise<TaskEntity[]> => Promise.resolve(tasks)

export const insertTask = async (title: string, description: string) => {
  try{
    const newTask = new Task({title: title, description: description, status: "todo"})
    tasks = [...tasks, newTask]
    await Promise.resolve(tasks)
  }catch(err) {
    //log ex,message
    throw err;
  }
}

export const updateTaskStatus = async (taskId: string) => {
  try {
    let task = tasks.find(task => task.id === taskId)
    task.status = 'done';
  }catch(err) {
    //log errorMessage
    throw err
  }
}

export const deleteTask = async (taskId: string) => {
  try {
    tasks = tasks.filter(task => task.id !== taskId);
  } catch(err) {
    //log ex,message
    throw err;
  }
}