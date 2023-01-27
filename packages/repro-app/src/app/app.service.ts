import { Injectable } from '@nestjs/common';
// import { Post } from '@generated/prisma-repro';

@Injectable()
export class AppService {
  getData(): { message: string } {
    const post: Post;

    return { message: 'Welcome to repro-app!' };
  }
}
