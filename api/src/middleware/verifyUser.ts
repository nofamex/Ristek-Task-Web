import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { NoUserFoundError, WrongPasswordError } from '../error/ServiceError';

export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  const prisma = new PrismaClient();
  const user = await prisma.users.findFirst({
    where: { username: req.body.data.username },
  });

  if (!user) {
    res.send(NoUserFoundError());
    return;
  }

  const samePassword = user.password === req.body.data.password;

  if (!samePassword) {
    res.send(WrongPasswordError());
    return;
  }

  next();
};
