import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './Task/task.module';
import { Task } from './Task/task.Entity';
import { User } from './users/user.entity';
import { userModule } from './users/user.module';
import { authModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'prodev',
      database: 'test',
      entities: [
        Task, User
      ],
      synchronize: true,
    }),
    TaskModule,
    userModule,
    authModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
