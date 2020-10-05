import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';


@Injectable()
export class TodoLocalStorage {

  set(todos: Todo[]): void {
    if (!localStorage.getItem('todo')) {
      localStorage.setItem('todo', JSON.stringify(todos));
    } else {
      localStorage.setItem('todo', JSON.stringify(todos));
    }
  }

  get(): Todo[] {
    return JSON.parse(localStorage.getItem('todo'));
  }
}
