export type Task = {
  id: string,
  title: string,
  description: string,
  status: 'done' | 'todo' | 'progress'
}