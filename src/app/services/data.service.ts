import {Injectable} from '@angular/core';
import {Todo} from '../interfaces/todo';

@Injectable()

export class DataService {

  private data: Todo[] = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [
    {
      id: 1,
      name: 'Занятие по Angular',
      status: true,
      deleted: false,
      description: 'Изучить 2 урока'
    },

    {
      id: 2,
      name: 'Занятие по TypeScript',
      status: false,
      deleted: true,
      description: 'Изучить 2 урока'
    },

    {
      id: 3,
      name: 'Занятие по React',
      status: false,
      deleted: false,
      description: 'Изучить 2 урока'
    },

    {
      id: 4,
      name: 'Занятие по JavaScript',
      status: false,
      deleted: false,
      description: 'Изучить 2 урока'
    },
  ];


  get(): Todo[] {
    return this.data;
  }

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
