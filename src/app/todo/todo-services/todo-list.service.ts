import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Todo} from "../todo-list/todo";
import {AppSettings} from "../../app.settings";

@Injectable()
export class TodoListService {
  private url = AppSettings.API_DB + 'collections/todos';
  private key = 'apiKey=' + AppSettings.API_KEY;
  private baseUrl = this.url + '?' + this.key;

  constructor(private http: Http) {
  }

  public getTodos(categoryId: string): Observable<Todo[]> {
    let _url: string = this.url + '?q=' + JSON.stringify({categoryID: categoryId}) + '&' + this.key;

    return this.http.get(_url)
      .map(this.extractToDos)
      .catch(this.handleError);
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.http.post(this.baseUrl, todo)
      .catch(this.handleError);
  }

  public deleteTodo(todoId: any): Observable<Todo> {
    return this.http.delete(this.url + "/" + todoId.$oid + '?' + this.key, todoId)
      .catch(this.handleError);
  }

  private deleteTodos(todos: Todo[]) {
    for (let todo of todos) {
      this.deleteTodo(todo._id)
        .subscribe(
          () => console.log('Deleting completed'),
          error => console.log('Deleting completed with error: ' + error)
        );
    }
  }

  public deleteTodosWithCategoryID(categoryID: any) {
    this.getTodos(categoryID.$oid)
      .subscribe(
        todos => this.deleteTodos(todos),
        error => console.log('Deleting completed with error: ' + error)
      );
  }

  public editTodo(todo: Todo): Observable<Todo> {
    return this.http.put(this.url + "/" + todo._id["$oid"] + '?' + this.key, todo)
      .catch(this.handleError);
  }

  private extractToDos(response: Response) {
    let res = response.json();
    let todos: Todo[] = [];
    for (let i = 0; i < res.length; i++) {
      todos.push(new Todo(res[i]._id, res[i].name, res[i].completed, res[i].categoryID));
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
