import {Injectable} from '@angular/core';
import {Todo} from '../interfaces/todo';


@Injectable()

export class TodoLocalStorage {
private data: Todo[] = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];



add(todo: Todo): void {
  if(localStorage.getItem('todo') == null) {
    this.data.push(todo);
    localStorage.setItem('todo', JSON.stringify(this.data))
 
  } else {
this.data = JSON.parse(localStorage.getItem('todo'));
this.data.push(todo);
localStorage.setItem('todo', JSON.stringify(this.data))
  }
}

delete(index: number): void {
  this.data = JSON.parse(localStorage.getItem('todo'));
  this.data.slice(index, 1);
  localStorage.setItem('todo', JSON.stringify(this.data));
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
