// Response Time
import { Request, Response } from 'express';

export interface Data {
  properties: {
    epoch: {
      description: number;
      type: string;
    };
  };
  required: string[];
  type: string;
}

export const getTime = (req: Request, res: Response) => {
  try {
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
  } catch (e) {
    res.status(400);
    res.send(e);
  }
};
