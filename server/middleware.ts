import { Request, Response, NextFunction } from 'express';
export const tokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token !== 'mysecrettoken') {
    res.status(403);
    res.send(new Error('Wrong AccessCredentials'));
  } else {
    next();
  }
};
