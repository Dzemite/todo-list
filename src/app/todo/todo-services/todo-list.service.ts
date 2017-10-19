import {Injectable, resolveForwardRef} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Todos} from "../todo-list/todo";
import {AppSettings} from "../../app.settings";

@Injectable()
export class TodoListService {
  private url = AppSettings.API_DB + 'collections/todos';
  private key = 'apiKey=' + AppSettings.API_KEY;
  private baseUrl = this.url + '?' + this.key;

  constructor(private http: Http) {
  }

  public getTodos(categoryId: string): Observable<Todos> {
    let _url: string = this.url + '?q=' + JSON.stringify({categoryID: categoryId}) + '&' + this.key;

    return this.http.get(_url)
      .map(this.extractToDos)
      .catch(this.handleError);
  }

  public refrashTodo(todos: Todos): Observable<Todos> {
    let data = JSON.stringify({
      "$set": {
        "tasks": todos.tasks
      }
    });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.url + '/' + todos._id["$oid"] + '?' + this.key, data, options)
      .catch(this.handleError);
  }

  public createTodoList(categoryID: string) {
    this.refrashTodo(new Todos(null, [], categoryID));
  }

  private deleteTodos(todos: Todos) {
    return this.http.delete(this.url + "/" + todos._id["$oid"] + '?' + this.key)
      .catch(this.handleError);
  }

  public deleteTodosWithCategoryID(categoryID: any) {
    this.getTodos(categoryID.$oid)
      .subscribe(
        todos => this.deleteTodos(todos),
        error => console.log('Deleting completed with error: ' + error)
      );
  }

  private extractToDos(response: Response) {
    let res = response.json();

    return new Todos(res[0]._id, res[0].tasks, res[0].categoryID);
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
