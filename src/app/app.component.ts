import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { TodoLocalStorage } from './services/todo-local-storage.service';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'holop-project',
  template: `
    <app-dashboard></app-dashboard>`,
    providers: [TodoService, TodoLocalStorage]
})
export class AppComponent {
  title = 'Холоп';
 
  constructor(private readonly titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
