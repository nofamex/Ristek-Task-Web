import { Router, Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

const authRouter = Router();
const authService = new AuthService();

authRouter.post('/register', async (req: Request, res: Response) => {
  const { username, password, fullName } = req.body;

  const result = await authService.createNewUser({
    username,
    password,
    fullName,
  });

  res.json(result);
});

authRouter.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const result = await authService.login({ username, password });

  res.json(result);
});

export default authRouter;
