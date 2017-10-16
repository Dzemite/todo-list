import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Todo_list} from "../todo-list/todo-list";
import {Observable} from "rxjs";
import {AppSettings} from "../app.settings";

@Injectable()
export class TodosService {
  private url = AppSettings.API_DB;
  private key = AppSettings.API_KEY;

  constructor(private http: Http){}

  public getTodos(categoryId: any): Observable<Todo_list[]> {
    return this.http.get(this.url + 'collections/todos?q=' + categoryId + '&apiKey=' + this.key)
      .map(this.extractToDos)
      .catch(this.handleError);
  }

  private extractToDos(response: Response) {
    let res = response.json();
    let todos: Todo_list[] = [];
    for (let i = 0; i < res.length; i++) {
      todos.push(new Todo_list(res[i]._id, res[i].name, res[i].completed));
    }
    return todos;
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
