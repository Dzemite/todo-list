import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {path: 'home', component: HomePageComponent}
  ])],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
