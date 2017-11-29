import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {sha1} from '@angular/compiler/src/i18n/digest';
import {AppSettings} from '../app.settings';
import {User} from '../entities/user';

@Injectable()
export class AuthenticationService {
  private url = AppSettings.API_DB + 'collections/users';
  private key = 'apiKey=' + AppSettings.API_KEY;
  private baseUrl = this.url + '?' + this.key;

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    return this.httpClient.get(this.url + '?q=' + JSON.stringify({username: username}) + '&' + this.key)
      .map((response: HttpResponse<User>) => {
          const user = response.body;
          if (response && user.password === sha1(password)) {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        }
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
