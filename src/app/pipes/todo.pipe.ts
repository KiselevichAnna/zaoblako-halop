import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Pipe({
  name: 'todoPipe',
  pure: false
})

@Injectable()
export class TodoPipe implements PipeTransform {

  transform(todos: Todo[], showTodo: boolean): Todo[] {

    if (showTodo) {
      return todos;
    } else {
      return todos.filter(todo => !todo.status);
    }

  }
}
