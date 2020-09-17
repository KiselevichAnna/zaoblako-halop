import {Component, OnInit} from '@angular/core';
import {Todo} from '../../interfaces/todo';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DataService]
})
export class DashboardComponent implements OnInit {

  public showDeleted = false;

  public todo: Todo[] = [];

  public newTodo = new Todo();

  constructor(public dataService: DataService) {
  }

  save(): void {
    const result = this.dataService.add(this.newTodo);

    if (result) {
      this.newTodo = new Todo();
    }
  }

  ngOnInit(): void {
    this.todo = this.dataService.get();
  }

  update(todo: Todo) {
    this.dataService.update(todo);
  }
}
