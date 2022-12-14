// Response Time
import { Request, Response } from 'express';
import { mockData } from './mockData';

export const getTime = (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    if (token === 'mysecrettoken') {
      res.status(200);
      res.send({
        properties: {
          epoch: {
            description: Date.now(),
            type: 'number'
          }
        },
        required: ['epoch'],
        type: 'object'
      });
    } else {
      throw new Error('Wrong AccessCredentials');
    }
  } catch (e) {
    res.status(403);
    res.send(e);
  }
};
