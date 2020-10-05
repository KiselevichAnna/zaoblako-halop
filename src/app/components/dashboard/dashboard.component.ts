import { Component } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  isEditTodo = false;

  showDeleted = false;
  showTodo = true;
  selectedTodo: Todo = null;

  constructor(public todoService: TodoService) {
  }

  update(todo: Todo): void {
    this.todoService.update(todo);
  }

  edit(todo: Todo): void {
    this.isEditTodo = true;
    this.selectedTodo = todo;
  }

  onUpdate(): void {
    this.isEditTodo = false;
    this.selectedTodo = null;
  }
}
