import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { TodoList, TodoListDocument } from './entities/todo-list.entity';

@Injectable()
export class TodoListService {

  constructor(@InjectModel(TodoList.name) private todoListModel: Model<TodoListDocument>) {}

  create(createTodoListDto: CreateTodoListDto) {
    const task = new this.todoListModel(createTodoListDto);
    return task.save();
  }

  findAll() {
    const tasks = this.todoListModel.find();
    return tasks;
  }

  findOne(id: string) {
    const task = this.todoListModel.findById(id);
    return task;
  }

  update(id: string, updateTodoListDto: UpdateTodoListDto) {
    const task = this.todoListModel.updateOne(
      {
        _id: id
      },
      {
        $set: updateTodoListDto
      },
      {
        new: true
      })

    return task;
  }

  remove(id: string) {
    const task = this.todoListModel.deleteOne({_id: id}).exec();
    return task;
  }
}
