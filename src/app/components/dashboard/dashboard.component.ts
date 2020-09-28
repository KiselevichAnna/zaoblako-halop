import {Component, TemplateRef, ViewChild} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],


})
export class DashboardComponent {

  //типы шаблонов
  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;

  public showDeleted = false;
  public showTodo = false;
  public newTodo = new Todo();
  
 
  constructor(public todoService: TodoService) {
    
  }


  save(): void {
    const result = this.todoService.add(this.newTodo);
    if (result) {
      this.newTodo = new Todo();
    }
  }

 

  // редактирование пользователя
  edit() {
    this.newTodo = new Todo();
  }

  loadTemplate(todo: Todo) {
    if (this.newTodo && this.newTodo.id === todo.id) {
        return this.editTemplate;
    } else {
        return this.readOnlyTemplate;
    }
  }


  update(todo: Todo) {
    this.todoService.update(todo);
  }
}
