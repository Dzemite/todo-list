import './rx-js.operators';

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';

import {AppRoutingModule} from './app-routing.module';
import {TodoModule} from './todo/todo.module';

import {RouterLinkStubDirective, RouterOutletStubComponent} from '../testing-helpers/router-stubs';
import {MaterialModule} from './material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { TemplateDeleteDialogComponent } from './dialogs/template-delete-dialog/template-delete-dialog.component';
import { TemplateEditTodoDialogComponent } from './dialogs/template-edit-todo-dialog/template-edit-todo-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RouterLinkStubDirective,
    RouterOutletStubComponent,
    TemplateDeleteDialogComponent,
    TemplateEditTodoDialogComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
