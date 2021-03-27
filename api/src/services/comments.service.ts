import { PrismaClient } from '@prisma/client';
import { NoBlogsFoundError } from '../error/ServiceError';

export class CommentsService {
  async comment(options: { blogId: number; body: string }) {
    const prisma = new PrismaClient();

    const blog = await prisma.blogs.findFirst({ where: { id: options.blogId } });

    if (!blog) {
      return NoBlogsFoundError();
    }

    const comment = await prisma.comments.create({
      data: { blog_id: blog.id, body: options.body },
    });

    return comment;
  }
}
