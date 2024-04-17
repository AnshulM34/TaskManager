import React from 'react';
import { Task } from "../../api/TaskManager/types"

type Props = {
  tasks: Task[],
  removeTask: (id: string) => void,
  doneTask: (id: string) => void
}

export const TaskList = ({tasks, removeTask, doneTask}: Props) => {
  return (
    <div>
      {tasks.map((task: Task) => (
        <div key={task.id}>
        {task.status === 'done' ? <h3>{task.title}</h3> : <h3 className='doneTask'>{task.title}</h3>}
        <p>{task.description}</p>
        <button onClick={() => alert('Edit task')}>Edit</button>
        <button onClick={() => removeTask(task.id)}>Delete</button>
        <button onClick={() => doneTask(task.id)}>Done</button>
        </div>
      ))}
    </div>
  )
}