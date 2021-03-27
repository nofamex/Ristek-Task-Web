import { Router, Request, Response } from 'express';
import { convertToken } from '../middleware/convertToken';
import { verifyUser } from '../middleware/verifyUser';
import { BlogsService } from '../services/blogs.service';

const blogsRouter = Router();
const blogsService = new BlogsService();

blogsRouter.post('/', convertToken, verifyUser, async (req: Request, res: Response) => {
  const { title, body } = req.body;
  const { id } = req.body.data;

  const result = await blogsService.createBlogs({ ownerId: Number(id), title, body });

  res.send(result);
});

blogsRouter.get('/', convertToken, verifyUser, async (req: Request, res: Response) => {
  const { id } = req.body.data;
  const result = await blogsService.getAllBlogsByOwnerId({ ownerId: id });
  res.send(result);
});

blogsRouter.put('/:id', convertToken, verifyUser, async (req: Request, res: Response) => {
  const { title, body } = req.body;
  const { id } = req.body.data;
  const blogId = req.params.id;

  const result = await blogsService.editBlog({
    blogId: Number(blogId),
    ownerId: Number(id),
    title,
    body,
  });
});

blogsRouter.delete(
  '/:id',
  convertToken,
  verifyUser,
  async (req: Request, res: Response) => {
    const { id } = req.body.data;
    const blogId = req.params.id;

    const result = await blogsService.deleteBlog({
      blogId: Number(blogId),
      ownerId: Number(id),
    });

    res.send(result);
  }
);

export default blogsRouter;
