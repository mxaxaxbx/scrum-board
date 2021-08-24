import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRoleComponent } from './home/list-role/list-role.component';
import { ListTasksComponent } from './home/list-tasks/list-tasks.component';
import { ListUsersComponent } from './home/list-users/list-users.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterAdminComponent } from './home/register-admin/register-admin.component';
import { RegisterRoleComponent } from './home/register-role/register-role.component';
import { RegisterComponent } from './home/register/register.component';
import { UpdateRoleComponent } from './home/update-role/update-role.component';
import { UpdateUserComponent } from './home/update-user/update-user.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'listTasks',
    component: ListTasksComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'listUser',
    component: ListUsersComponent
  },
  {
    path: 'registerAdmin',
    component: RegisterAdminComponent,
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
