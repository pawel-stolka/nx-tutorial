import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from "@tutorial/data";


@Component({
  selector: 'tutorial-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos';
  todos: Todo[] = [
    { title: 'todo1' },
    { title: 'todo2' },
  ]

  constructor(private http: HttpClient) { 
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe(todos => this.todos = todos);
  }

  addTodo() {
    this.http.post<Todo>('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
    
  }
}
