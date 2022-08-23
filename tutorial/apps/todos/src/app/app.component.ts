import { HttpClient } from '@angular/common/http';
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
    { title: 'todo1' },
    { title: 'todo2' },
  ]
  url = '/api/todos';

  constructor(private http: HttpClient) { 
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>(this.url).subscribe(todos => this.todos = todos);
  }

  addTodo() {
    this.http.post<Todo>(this.url, {}).subscribe(() => {
      this.fetch();
    });
    // this.todos.push({
    //   title: `todo ${Math.floor(Math.random() * 100)}`
    // })
  }
}
