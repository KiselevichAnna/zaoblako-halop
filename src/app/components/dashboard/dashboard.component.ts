import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo'
import { DataService } from '../../services/data.service'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [DataService]
})
export class DashboardComponent implements OnInit { 
  
  public _data: Todo[] = [];

  constructor(private dataService: DataService){}
   
  addedTodo(newTodo: Todo): void {
          
    this.dataService.addTodo(newTodo);
}
ngOnInit(){
    this._data = this.dataService.getTodo();
}
  }
