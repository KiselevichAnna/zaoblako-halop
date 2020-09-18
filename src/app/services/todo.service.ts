import {Injectable} from '@angular/core';
import {Todo} from '../interfaces/todo';
import {TodoLocalStorage} from './todo-local-storage.service'

@Injectable()

export class TodoService {

  private todos: Todo[] =  [
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

  
  

  get(): Todo[] {
    return this.todos;
  }

  public todo: Todo[] = [];
  public newTodo = new Todo();
  
  constructor(private todoLocalStorage: TodoLocalStorage) {};
  
  
  validate(todo: Todo) {
    return !(!todo.name || !todo.description);
  }

  add(todo: Todo): boolean {

    if (this.validate(todo)) {

      todo.id = this.todos.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;

      this.todos.push(todo);
     this.todoLocalStorage.add(this.newTodo);
      

      return true;
    } else {
      return false;
    }
    
    
  }


  update(todo: Todo) {
    this.todos.map(dataTodo => {
      if (dataTodo.id === todo.id) {
        dataTodo = todo;
        this.todoLocalStorage.update(todo);
      }

      
    });

  }
}
