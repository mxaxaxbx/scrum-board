import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule }   from './material.module';
// Components
import { AppComponent }            from './app.component';
import { HeaderComponent }         from './home/header/header.component';
import { FooterComponent }         from './home/footer/footer.component';
import { LoginComponent }          from './home/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
// board components
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
// home compnts
import { RegisterComponent } from './home/register/register.component';
// admin components
import { ListUserComponent }     from './admin/list-user/list-user.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateUserComponent }   from './admin/update-user/update-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { ListRoleComponent }     from './admin/list-role/list-role.component';
import { UpdateRoleComponent }   from './admin/update-role/update-role.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ListTaskComponent,
    SaveTaskComponent,
    RegisterComponent,
    ListUserComponent,
    RegisterUserComponent,
    UpdateUserComponent,
    RegisterRoleComponent,
    ListRoleComponent,
    UpdateRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
