import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { CreatUserComponent } from '../creat-user/creat-user.component';
import { LoginUserComponent } from '../login-user/login-user.component';
import { TodosComponent } from '../todos/todos.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: CreatUserComponent },
  { path: 'todo', component: TodosComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
