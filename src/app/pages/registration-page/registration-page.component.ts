 import { Component, OnInit, ViewEncapsulation } from '@angular/core';
 import {Router} from '@angular/router';
 import {AlertService} from '../../app-services/alert.service';
 import {UsersService} from '../../app-services/users.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationPageComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.usersService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

}
