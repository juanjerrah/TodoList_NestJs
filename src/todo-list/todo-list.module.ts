import { Module } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { TodoListController } from './todo-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoList, TodoListSchema } from './entities/todo-list.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: TodoList.name, schema: TodoListSchema }])],
  controllers: [TodoListController],
  providers: [TodoListService]
})
export class TodoListModule {}
