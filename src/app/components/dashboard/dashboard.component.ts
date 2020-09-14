import { Component } from '@angular/core';



class todo{
  id: number;
  name: string;
  description: string;
  deleted: boolean;
  status: boolean;
   
  constructor(id: number, name: string, description: string) {

      this.id = id;
      this.name = name;
      this.description = description;
  }
}

@Component({
  selector: 'app-dashboard',
  template: `<div class="page-header">
      <h1> Список дел </h1>
  </div>
  <div class="panel">
      <div class="form-inline">
          <div class="form-group">
              <div class="col-md-5">
                  <input type="number" class="form-control" [(ngModel)]="id" placeholder = "Number" />
              </div>
          </div>
          <div class="form-group">
              <div class="col-md-5">
                  <input class="form-control" [(ngModel)]="name" placeholder="Name" />
              </div>
          </div>
          <div class="form-group">
              <div class="col-md-5">
                  <input class="form-control" [(ngModel)]="description" placeholder="Description" />
              </div>
          </div>
          <div class="form-group">
              <div class="col-md-offset-2 col-md-8">
                  <button class="btn btn-default" (click)="addtodo(name, description, id)">Добавить</button>
              </div>
              
      </div>
      <table class="table table-striped">
          <thead>
              <tr>
                  <th>Number</th>
                  <th>Name</th>
                  <th>Description</th>
              </tr>
          </thead>
          <tbody>
              <tr *ngFor="let item of items">
                  <td>{{item.id}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.description}}</td>
                  <td><input type="checkbox" [(ngModel)]="item.status" /></td>
                  <td><input type="checkbox" [(ngModel)]="item.deleted" /></td>
              </tr>
          </tbody>
      </table>
  </div>`
})
export class DashboardComponent { 
  name: string;
  description: string;
  id: number = 0;
   
  items: todo[] = 
  [
      { id: 1, name: "Занятие по Angular", status: true, deleted: false, description: "Изучить 2 урока"},
      { id: 2, name: "Занятие по TypeScript", status: false, deleted: true, description: "Изучить 2 урока" },
      { id: 3, name: "Занятие по React", status: false, deleted: false, description: "Изучить 2 урока" },
      { id: 4, name: "Занятие по JavaScript", status: false, deleted: false, description: "Изучить 2 урока" }
  ];
  addtodo(name: string, description: string, id: number): void {
       
      if(name==null || name.trim()=="" || id==null || description==null || description.trim()=="")
          return;
      this.items.push(new todo(id, name, description));
  }
}