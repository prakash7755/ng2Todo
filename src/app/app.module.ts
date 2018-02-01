import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module'




import { UserServService } from './user-serv.service'
import { TodosService } from './todos.service'


import { AppComponent } from './app.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { TodosComponent } from './todos/todos.component';




@NgModule({
  declarations: [
    AppComponent,
    CreatUserComponent,
    LoginUserComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
   
  providers: [UserServService,TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
