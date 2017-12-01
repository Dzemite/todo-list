import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegistrationPageComponent}
  ])],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
