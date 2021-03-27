import { CommentsService } from '../services/comments.service';
import { Router, Request, Response } from 'express';

const commentsRouter = Router();
const commentsService = new CommentsService();

commentsRouter.post('/:id', async (req: Request, res: Response) => {
  const blogId = req.params.id;
  const { body } = req.body;

  const result = await commentsService.comment({ blogId: Number(blogId), body });
  res.send(result);
});

export default commentsRouter;
