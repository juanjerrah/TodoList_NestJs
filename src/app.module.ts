import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoListModule } from './todo-list/todo-list.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://juanjerrah:Ju%40nebel15@cluster0.wdfwl.mongodb.net/todolist'),
    TodoListModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
