import express, { Router, Request, Response } from 'express';
const router: Router = express.Router();

router.get('/time', (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    if (token === 'mysecrettoken') {
      res.status(200);
      res.send('<h1>Hello World From the Typescript Server!</h1>');
    } else {
      throw new Error('Wrong AccessCredentials');
    }
  } catch (e) {
    res.status(403);
    res.send(e);
  }
});

export default router;
