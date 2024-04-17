import express, { Router, Request, Response} from  "express";
import * as TaskService from './mocktask.service';

export const taskRouter = Router();

taskRouter.get('/', async (req: Request, res:  Response) => {
  try {
      const tasks = await TaskService.getTasks();
      res.json(tasks);
  } catch (err) {
      res.status(500).send('Server Error');
  }
});

taskRouter.post('/', async (req: Request, res: Response) => {
  try {
      await TaskService.insertTask(req.body.title, req.body.description);
      res.status(201).send('Task Created');
  } catch (err) {
      res.status(500).send('Server Error');
  }
});

taskRouter.put('/:taskId', async (req: Request, res: Response) => {
  try {
      await TaskService.insertTask(req.body.title, req.body.description);
      res.status(201).send('Task Created');
  } catch (err) {
      res.status(500).send('Server Error');
  }
});

taskRouter.delete('/:taskId', async (req: Request, res: Response) => {
  try {
      await TaskService.deleteTask(req.params.taskId);
      res.status(200).send('Task Deleted');
  } catch (err) {
      res.status(500).send('Server Error');
  }
});


