import React, {useState} from 'react';
export const AddTask = React.memo(({addTask}: {addTask: (title: string, description: string) => void}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  return (
    <div>
        <input type="text" aria-label="task-title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <input type="text" aria-label="task-description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <button onClick={() => addTask(title, description)}>Add Task</button>
    </div>
  )
})