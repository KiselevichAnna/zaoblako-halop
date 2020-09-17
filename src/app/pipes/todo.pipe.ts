import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Todo} from 'src/app/interfaces/todo';

@Pipe({
  name: 'todoPipe',
  pure: false
})

@Injectable()
export class TodoPipe implements PipeTransform {

  transform(todos: Todo[], showDeleted: boolean) {

    if (showDeleted) {
      return todos;
    } else {
      return todos.filter(todo => !todo.deleted);
    }

  }
}
