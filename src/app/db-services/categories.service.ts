import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Category} from "../categories/category";
import {Observable} from "rxjs/Observable";
import {AppSettings} from "../app.settings";

@Injectable()
export class CategoriesService {
  private url = AppSettings.API_DB + 'collections/categories';
  private key = '?apiKey=' + AppSettings.API_KEY;
  private baseUrl = this.url + this.key;

  constructor(private http: Http){}

  public getCategories(): Observable<Category[]> {
    return this.http.get(this.url + this.key)
      .map(this.extractCategories)
      .catch(this.handleError);
  }

  public addCategory(category: Category): Observable<Category> {
    return this.http.post(this.baseUrl, category)
      .catch(this.handleError);
  }

  public deleteCategory(categoryId: any): Observable<Category> {
    return this.http.delete(this.url + "/" + categoryId.$oid + this.key, categoryId)
      .catch(this.handleError);
  }

  public editCategory(category: Category): Observable<Category> {
    return this.http.put(this.url + "/" + category._id["$oid"] + this.key, category)
      .catch(this.handleError);
  }

  private extractCategories(response: Response) {
    let res = response.json(); console.log("response: ", res);
    let categories: Category[] = [];
    for (let i = 0; i < res.length; i++) {
      categories.push(new Category(res[i]._id, res[i].name));
    }
    return categories;
  }

  private handleError(error: any, cought: Observable<any>): any {
    let message = "";

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }
}
