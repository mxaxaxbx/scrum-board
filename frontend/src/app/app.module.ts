import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { FooterComponent } from './home/footer/footer.component';
import { ListTasksComponent } from './home/list-tasks/list-tasks.component';
import { ListUsersComponent } from './home/list-users/list-users.component';
import { RegisterAdminComponent } from './home/register-admin/register-admin.component';
import { UpdateUserComponent } from './home/update-user/update-user.component';
import { RegisterRoleComponent } from './home/register-role/register-role.component';
import { ListRoleComponent } from './home/list-role/list-role.component';
import { UpdateRoleComponent } from './home/update-role/update-role.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ListTasksComponent,
    ListUsersComponent,
    RegisterAdminComponent,
    UpdateUserComponent,
    RegisterRoleComponent,
    ListRoleComponent,
    UpdateRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
