import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
    providedIn: 'root', })

  export class DataService  {
    
      private _data: Todo[] = [
        { 
            id: 1, 
            name: "Занятие по Angular", 
            status: true, 
            deleted: false, 
            description: "Изучить 2 урока"
        },

        { 
            id: 2, 
            name: "Занятие по TypeScript", 
            status: false, 
            deleted: true, 
            description: "Изучить 2 урока" 
        },

        { 
            id: 3, 
            name: "Занятие по React", 
            status: false, 
            deleted: false, 
            description: "Изучить 2 урока"
        },

        { 
            id: 4, 
            name: "Занятие по JavaScript", 
            status: false, 
            deleted: false, 
            description: "Изучить 2 урока"
        },

    ];

      

    getTodo(): Todo[] {
          
      return this._data;
  }
  addTodo(_data) {
        
      this._data.push(_data);
  }
}