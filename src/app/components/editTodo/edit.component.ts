import {Component, EventEmitter, Output} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],


})
export class EditComponent {
  
  @Output() public selectedTodo = new Todo();

  constructor(public todoService: TodoService) {
  }

  @Output() onUpdate = new EventEmitter<boolean>()


  update(todo: Todo) {
    this.todoService.update(todo);
    this.onUpdate.emit()
  }
  
}
