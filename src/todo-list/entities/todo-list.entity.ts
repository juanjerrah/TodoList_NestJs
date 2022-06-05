import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoListDocument = TodoList & Document;

@Schema()
export class TodoList {
  @Prop()
  taskName: string;

  @Prop()
  status: boolean;
}

export const TodoListSchema = SchemaFactory.createForClass(TodoList);
