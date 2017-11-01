import './rx-js.operators';

import {AngularFontAwesomeModule} from 'angular-font-awesome/index';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';

import {AppRoutingModule} from './app-routing.module';
import {TodoModule} from './todo/todo.module';

import {RouterLinkStubDirective, RouterOutletStubComponent} from '../testing-helpers/router-stubs';

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
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
