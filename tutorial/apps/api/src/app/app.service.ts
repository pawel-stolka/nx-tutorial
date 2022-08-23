import { Injectable } from '@nestjs/common';

interface Todo {
  title: string;
}

@Injectable()
export class AppService {
  todos: Todo[] = [
    { title: 'todo #1' },
    { title: 'todo #2' },
  ];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `todo #${Math.floor(Math.random() * 100)}`
    })
  }
}
