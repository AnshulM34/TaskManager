export interface TaskEntity {
  id: string,
  title: string,
  description: string,
  status: 'done' | 'todo' | 'inprogress'
}