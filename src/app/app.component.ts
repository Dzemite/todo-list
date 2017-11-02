import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ToDo List';

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/home']);
  }
}
