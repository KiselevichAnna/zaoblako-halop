import {Component, OnInit} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';
import {TodoLocalStorage} from '../../services/todo-local-storage.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [TodoService, TodoLocalStorage]

})
export class DashboardComponent implements OnInit {

  public showDeleted = false;

  public todo: Todo[] = [];

  public newTodo = new Todo();

  constructor(public todoservice: TodoService, public todolocalstorageservice: TodoLocalStorage) {
  }

  

  save(): void {
    const result = this.todolocalstorageservice.add(this.newTodo);
    const result2 = this.todoservice.add(this.newTodo);

    if (result) {
      this.newTodo = new Todo();
    }

    if (result2) {
      this.newTodo = new Todo();
    }
  }

  ngOnInit(): void {
    this.todo = this.todoservice.get();
    this.todo = this.todoservice.set();
  }

  

  update(todo: Todo) {
    this.todolocalstorageservice.update(todo);
    this.todoservice.update(todo);
  }
}
