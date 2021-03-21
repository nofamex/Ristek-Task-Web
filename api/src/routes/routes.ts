import { Request, Response, Router } from 'express';

const V1 = Router();

V1.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

module.exports = V1;
