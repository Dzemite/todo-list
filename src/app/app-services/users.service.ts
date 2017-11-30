import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs/Observable';
import { User } from '../entities/user';

@Injectable()
export class UsersService {

  private url = AppSettings.API_DB + 'collections/users';
  private key = 'apiKey=' + AppSettings.API_KEY;
  private baseUrl = this.url + '?' + this.key;

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<User[]> {
    return this.httpClient.get(this.url + '?' + this.key)
      .map(this.extractUsers)
      .catch(this.handleError);
  }

  public getByLogin(login: string): Observable<User> {
    return this.httpClient.get(this.url + '?q=' + JSON.stringify({login: login}) + '&' + this.key)
      .catch(this.handleError);
  }

  public create(user: User): Observable<User> {
    return this.httpClient.post(this.baseUrl, user)
      .catch(this.handleError);
  }

  public update(user: User): Observable<User> {
    return this.httpClient.put(this.url + '/' + user._id['$oid'] + '?' + this.key, user)
      ._catch(this.handleError);
  }

  public delete(userId: any): Observable<User> {
    return this.httpClient.delete(this.url + '/' + userId.$oid + '?' + this.key)
      .catch(this.handleError);
  }

  private extractUsers(response: HttpResponse<User[]>) {
    return response;
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend return code ${err.status}, body was: ${err.error.body}`;
    }

    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }
}
