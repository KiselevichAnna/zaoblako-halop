import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {

  @Input()
  todo: Todo = null;

  @Output()
  updateEvent = new EventEmitter<void>();

  constructor(public todoService: TodoService) {
  }

  update(todo: Todo): void {
    this.todoService.update(todo);
    this.updateEvent.emit();
  }

}
