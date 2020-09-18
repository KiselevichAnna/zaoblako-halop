import {Component, OnInit} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';
import {TodoLocalStorage} from '../../services/todo-local-storage.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  

})
export class DashboardComponent implements OnInit {

  public showDeleted = false;

  public todo: Todo[] = [];

  public newTodo = new Todo();

  constructor(public todoService: TodoService) {
 }

  

  save(): void {
    const result = this.todoService.add(this.newTodo);
    

    if (result) {
      this.newTodo = new Todo();
    }

  }

  ngOnInit(): void {
    this.todo = this.todoService.get();
  }

  

  update(todo: Todo) {
    this.todoService.update(todo);
  }
}
