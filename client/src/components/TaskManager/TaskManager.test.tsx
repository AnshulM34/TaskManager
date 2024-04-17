import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';
import {TaskManager} from './TaskManager';
import { deleteTask, insertTask } from '../../api/TaskManager/api';

const tasks = [{id: "1", title:"start", description:"test task description"},{id: "1", title:"start", description:"work"}]

const server = setupServer(
  http.get('/api/tasks', async () => {
    return HttpResponse.json(tasks)
  }),

  http.post('/api/tasks', () => {
    return HttpResponse.json();
  }),

  http.delete('/api/tasks', () => {
    return HttpResponse.json();
  })
)

describe('testing task manager', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('load app', async () => {
    render(<TaskManager/>)
    expect(screen.getByText(/Task Manager/i)).toBeInTheDocument();
    expect(screen.getByText(/test task description/i)).toBeInTheDocument();
  })

  test('add tasks', async () => {
    render(<TaskManager/>)
    const inputTitle = screen.getByLabelText("task-title");
    const inputDescription = screen.getByLabelText("task-description");
    fireEvent.change(inputTitle, {target: {value: "unit test title"}})
    fireEvent.change(inputDescription, {target: {value: "unit test description"}})
    fireEvent.click(screen.getByText('Add Task'));
    expect(insertTask).toHaveBeenCalled();
  })

  test('delete task', async () => {
    render(<TaskManager/>)
    fireEvent.click(screen.getByText('Delete'));
    expect(deleteTask).toHaveBeenCalled();
  })
})

//testing task manager for error response from api for showing error component

