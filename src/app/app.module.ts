import './rx-js.operators';

import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';

import {AppRoutingModule} from './app-routing.module';
import {TodoModule} from './todo/todo.module';

import {RouterLinkStubDirective, RouterOutletStubComponent} from '../testing-helpers/router-stubs';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RouterLinkStubDirective,
    RouterOutletStubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    TodoModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
