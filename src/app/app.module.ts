import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComps/todos/todos.component';
import { TodoItemsComponent } from './MyComps/todo-items/todo-items.component';
import { TodoAddComponent } from './MyComps/todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComps/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemsComponent,
    TodoAddComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
