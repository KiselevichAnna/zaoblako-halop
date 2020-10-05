import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {TodoPipe} from 'src/app/pipes/todo.pipe';
import {DeletedPipe} from 'src/app/pipes/deleted.pipe';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {EditComponent} from './components/editTodo/edit.component';
import {CreateComponent} from './components/createTodo/create.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DeletedPipe,
    TodoPipe,
    EditComponent,
    CreateComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
