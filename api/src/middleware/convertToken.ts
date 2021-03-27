import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { UnauthorizedAccesError } from '../error/ServiceError';

export const convertToken = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.send(UnauthorizedAccesError());
    return;
  }

  const token = bearer.split(' ')[1];
  const verified = jwt.verify(token, config.JWT_SECRET_KEY);

  req.body.data = verified;
  next();
};
