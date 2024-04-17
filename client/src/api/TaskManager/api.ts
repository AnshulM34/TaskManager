import axios, { AxiosResponse } from 'axios';
import { Task } from './types';

export const getTasks = () : Promise<Task[]> => {
  return axios.get<Task[]>('http://localhost:5001/api/task')
    .then(res => res.data)
}

export const insertTask = ({title, description}: {title: string, description: string}): Promise<AxiosResponse> => {
  return axios.post('http://localhost:5001/api/task', { title, description });
}

export const deleteTask = (taskId: string) : Promise<AxiosResponse> => {
  return axios.delete(`http://localhost:5001/api/task/${taskId}`);
}

export const updateTaskToDone = (taskId: string) : Promise<AxiosResponse> => {
  return axios.put(`http://localhost:5001/api/task/${taskId}`);
}