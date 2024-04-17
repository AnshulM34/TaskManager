import React, { useState, useEffect } from 'react';
import { Task } from '../../api/TaskManager/types';
import { deleteTask, getTasks, insertTask, updateTaskToDone } from '../../api/TaskManager/api';
import { TaskList } from './TaskList';
import { AddTask } from './AddTask';

export const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [hasInvalidated, setInvalidate] = useState<boolean>(true);
  //loading and errocomponent

  useEffect(() => {
    if (hasInvalidated) {
      setLoading(false); // since apis not being hit so doing here
      getTasks()
        .then((tasks: Task[]) => {
          setTasks(tasks);
          setLoading(false);
          setInvalidate(false);
        })
        .catch(err => console.log(err)); // show errorcomponet
    }
  }, [hasInvalidated]);

  const addTask = (title: string, description: string) => {
      insertTask({title, description})
      .then(() => setInvalidate(true))
      .catch(err => console.log(err));
  };

  const removeTask = (taskId: string) => {
    deleteTask(taskId)
      .then(() => setInvalidate(true))
      .catch(err => console.log(err));
  };

  const doneTask = (taskId: string) => {
    updateTaskToDone(taskId)
      .then(() => setInvalidate(true))
      .catch(err => console.log(err));
  };

  return (
    <div data-testid="taskmanager">
      {isLoading
        ? 'loading'
        : <>
          <h1>Task Manager</h1>
          <AddTask addTask={addTask} />
          <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask}/>
        </>
      }
    </div>
  );
};

