import 'jest'
import express from 'express';
import request , { Request} from 'supertest';

import Task from '../src/Task'

const app = express();

describe('test taskmanager api', () => {
  jest.mock('../src/Task', () => {
      find : jest.fn().mockReturnValue([{id: '1', title: "add", description: "more", status:"todo"}])
  });
  
  it('test gettask', async () => {
      const response = 
      await request(app)
      .get('/api/task')
      .expect('Content-Length', '1')
      .expect(200);
  })

  it('test insetTask', async () => {
      const response = 
      await request(app)
      .post('/api/task')
      .send({title: 'newTask', description: "newtask"})
      .expect(200);
  })

  it('test updateTask', async () => {
      const response = 
      await request(app)
      .put('/api/task/123')
      .expect(200);
  })

  it('test deleteTask', async () => {
      const response = 
      await request(app)
      .delete('/api/task/123')
      .expect(500);
  })

  it('test failure of update task', async () => {
      const response = 
      await request(app)
      .delete('/api/task/123')
      .expect(200);
  })
})
