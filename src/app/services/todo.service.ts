import {Injectable, TemplateRef, ViewChild} from '@angular/core';
import {Todo} from '../interfaces/todo';
import {TodoLocalStorage} from './todo-local-storage.service';

@Injectable()

export class TodoService {

  private data: Todo[] = this.todoLocalStorage.get() ? this.todoLocalStorage.get() : [
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
    }
  ];


  
  isNewRecord: boolean;

  constructor(private todoLocalStorage: TodoLocalStorage) {
  };

  

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
      this.isNewRecord = true;
      this.todoLocalStorage.set(this.data);

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

    this.todoLocalStorage.set(this.data);
  }
}

