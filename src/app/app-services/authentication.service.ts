import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { User } from '../entities/user';

@Injectable()
export class AuthenticationService {
  private url = AppSettings.API_DB + 'collections/users';
  private key = 'apiKey=' + AppSettings.API_KEY;
  private baseUrl = this.url + '?' + this.key;

  constructor(private httpClient: HttpClient) { }

  // TODO: need to encrypt password
  public login(username: string, password: string) {
    return this.httpClient.get(this.url + '?q=' + JSON.stringify({username: username}) + '&' + this.key)
      .map((response: HttpResponse<User>) => {
          const user: User = response[0];
          if (user && user.password === password) {
            localStorage.setItem('currentUser', JSON.stringify(response));
          }
        }
      );
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }

}
