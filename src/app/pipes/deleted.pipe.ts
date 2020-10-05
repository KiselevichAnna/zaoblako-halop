import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Pipe({
  name: 'deletedPipe',
  pure: false
})

@Injectable()
export class DeletedPipe implements PipeTransform {

  transform(todos: Todo[], showDeleted: boolean): Todo[] {

    if (showDeleted) {
      return todos;
    } else {
      return todos.filter(todo => !todo.deleted);
    }

  }
}
