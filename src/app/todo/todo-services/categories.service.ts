import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Category} from '../../entities/category';
import {AppSettings} from '../../app.settings';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Injectable()
export class CategoriesService {
  private url = AppSettings.API_DB + 'collections/categories';
  private key = '?apiKey=' + AppSettings.API_KEY;
  private baseUrl = this.url + this.key;

  constructor(private httpClient: HttpClient) {}

  public getCategories(): Observable<{} | Category[]> {
    return this.httpClient.get(this.url + this.key)
      .map(this.extractCategories)
      .catch(this.handleError);
  }

  public addCategory(category: Category): Observable<{} | Category> {
    return this.httpClient.post(this.baseUrl, category)
      .catch(this.handleError);
  }

  public deleteCategory(categoryId: any): Observable<{} | Category> {
    return this.httpClient.delete(this.url + '/' + categoryId.$oid + this.key, categoryId)
      .catch(this.handleError);
  }

  public editCategory(category: Category): Observable<{} |Category> {
    return this.httpClient.put(this.url + '/' + category._id['$oid'] + this.key, category)
      .catch(this.handleError);
  }

  private extractCategories(response: HttpResponse<Category[]>) {
    return response;
  }

  private handleError(err: HttpErrorResponse): any {
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
