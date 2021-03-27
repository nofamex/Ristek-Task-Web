import { PrismaClient } from '@prisma/client';
import {
  ExistingUserError,
  NoUserFoundError,
  WrongPasswordError,
} from '../error/ServiceError';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

export class AuthService {
  async createNewUser(options: { username: string; password: string; fullName: string }) {
    const prisma = new PrismaClient();

    const existingUser = await prisma.users.findFirst({
      where: { username: options.username },
    });

    if (existingUser) {
      return ExistingUserError();
    }

    const hashedPassword = await bcrypt.hash(options.password, 10);

    const newUser = prisma.users.create({
      data: {
        username: options.username,
        password: hashedPassword,
        full_name: options.fullName,
      },
    });

    return newUser;
  }

  async login(options: { username: string; password: string }) {
    const prisma = new PrismaClient();

    const user = await prisma.users.findFirst({
      where: { username: options.username },
    });

    if (!user) {
      return NoUserFoundError();
    }

    const verified = await bcrypt.compare(options.password, user.password);

    if (!verified) {
      return WrongPasswordError();
    }

    const token = jwt.sign(user, config.JWT_SECRET_KEY, { expiresIn: '1h' });

    return token;
  }
}
