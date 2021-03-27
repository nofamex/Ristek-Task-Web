import { PrismaClient } from '@prisma/client';
import { NoBlogsFoundError, UnauthorizedAccesError } from '../error/ServiceError';

export class BlogsService {
  async createBlogs(options: { ownerId: number; title: string; body: string }) {
    const prisma = new PrismaClient();

    const newBlog = await prisma.blogs.create({
      data: {
        owner_id: options.ownerId,
        title: options.title,
        body: options.body,
        time_created: new Date(),
      },
    });

    return newBlog;
  }

  async getAllBlogsByOwnerId(options: { ownerId: number }) {
    const prisma = new PrismaClient();

    const blogs = await prisma.blogs.findMany({ where: { owner_id: options.ownerId } });

    if (blogs.length === 0) {
      return NoBlogsFoundError();
    }

    return blogs;
  }

  async editBlog(options: {
    blogId: number;
    ownerId: number;
    title: string;
    body: string;
  }) {
    const prisma = new PrismaClient();

    const blog = await prisma.blogs.findFirst({ where: { id: options.blogId } });

    if (!blog) {
      return NoBlogsFoundError();
    }

    if (blog.owner_id !== options.ownerId) {
      return UnauthorizedAccesError();
    }

    const updatedBlog = await prisma.blogs.update({
      where: { id: blog.id },
      data: {
        title: options.title,
        body: options.body,
      },
    });

    return updatedBlog;
  }

  async deleteBlog(options: { blogId: number; ownerId: number }) {
    const prisma = new PrismaClient();

    const blog = await prisma.blogs.findFirst({ where: { id: options.blogId } });

    if (!blog) {
      return NoBlogsFoundError();
    }

    if (blog.owner_id !== options.ownerId) {
      return UnauthorizedAccesError();
    }

    const deletedBlog = await prisma.blogs.delete({
      where: { id: blog.id },
    });

    return deletedBlog;
  }
}
