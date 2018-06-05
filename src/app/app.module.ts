import './rx-js.operators';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { AppRoutingModule } from './app-routing.module';
import { TodoModule } from './todo/todo.module';

import { RouterLinkStubDirective, RouterOutletStubComponent } from '../testing-helpers/router-stubs';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TemplateDeleteDialogComponent } from './dialogs/template-delete-dialog/template-delete-dialog.component';
import { TemplateEditTodoDialogComponent } from './dialogs/template-edit-todo-dialog/template-edit-todo-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { AuthenticationService } from './app-services/index';
import { AlertService } from './app-services/index';
import { UsersService } from './app-services/index';
import { AuthGuard } from './guards/auth.guard';
import { TemplateEditProfileDialogComponent } from './dialogs/template-edit-profile-dialog/template-edit-profile-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RouterLinkStubDirective,
    RouterOutletStubComponent,
    TemplateDeleteDialogComponent,
    TemplateEditTodoDialogComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    TemplateEditProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
