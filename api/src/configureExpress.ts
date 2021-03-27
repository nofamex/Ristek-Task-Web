import express from 'express';
import authRouter from './routes/authRouter';
import blogsRouter from './routes/blogsRouter';

export const app = express();

const apiRouter = express.Router();
const v1 = express.Router();

app.use('/api', apiRouter);
apiRouter.use('/v1', v1);

v1.use(express.json(), express.urlencoded({ extended: true }));
v1.use('/auth', authRouter);
v1.use('/blogs', blogsRouter);
