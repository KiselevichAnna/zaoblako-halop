import {Component, EventEmitter, Output} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],


})
export class CreateComponent {

  

  @Output() public newTodo = new Todo();

  constructor(public todoService: TodoService) {
  }

  @Output() onSave = new EventEmitter<boolean>()
  save(): void {
    const result = this.todoService.add(this.newTodo);
    if (result) {
      this.newTodo = new Todo();
      this.onSave.emit()
    }
  }

 
}
