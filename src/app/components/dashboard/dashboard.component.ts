import {Component} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],


})
export class DashboardComponent {


  public newTodo = new Todo();
  isCreateTodo:boolean=true;
  isEditTodo:boolean=false;

  constructor(public todoService: TodoService) {
  }

  save(): void {
    const result = this.todoService.add(this.newTodo);
    if (result) {
      this.newTodo = new Todo();
    }
  }

  update(todo: Todo) {
    this.todoService.update(todo);
  }

  edit() {
    this.isCreateTodo=this.isEditTodo;
  }
}
