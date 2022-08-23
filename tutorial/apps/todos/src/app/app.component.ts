import { Component } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = [
    { title: 'todo1'},
    { title: 'todo2'},
  ]

  addTodo() {
    this.todos.push({ 
      title: `todo ${Math.floor(Math.random()*100)}`
    })
  }
}
