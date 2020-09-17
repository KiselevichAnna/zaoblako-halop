import {Injectable} from '@angular/core';
import {Todo} from '../interfaces/todo';
import {TodoService} from './todo.service'

@Injectable()

export class TodoLocalStorage {

private data: Todo[] = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [TodoService];


  validate(todo: Todo) {
    return !(!todo.name || !todo.description);
  }


  add(todo: Todo): boolean {

    if (this.validate(todo)) {

      todo.id = this.data.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;

      this.data.push(todo);

      localStorage.setItem('todo', JSON.stringify(this.data));

      return true;
    } else {
      return false;
    }
  }

  update(todo: Todo) {
    this.data.map(dataTodo => {
      if (dataTodo.id === todo.id) {
        dataTodo = todo;
      }
    });
    localStorage.setItem('todo', JSON.stringify(this.data));
  }
}
