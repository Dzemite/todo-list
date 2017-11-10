import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Todo} from '../todo-list/todo';
import {AppSettings} from '../../app.settings';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Injectable()
export class TodoListService {
  private url = AppSettings.API_DB + 'collections/todos';
  private key = 'apiKey=' + AppSettings.API_KEY;
  private baseUrl = this.url + '?' + this.key;

  constructor(private httpClient: HttpClient) {
  }

  public getTodos(categoryId: string): Observable<Todo[]> {
    const _url: string = this.url + '?q=' + JSON.stringify({categoryID: categoryId}) + '&' + this.key;

    return this.httpClient.get(_url)
      .map(this.extractToDos)
      .catch(this.handleError);
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post(this.baseUrl, todo)
      .catch(this.handleError);
  }

  public deleteTodo(todoId: any): Observable<Todo> {
    return this.httpClient.delete(this.url + '/' + todoId.$oid + '?' + this.key, todoId)
      .catch(this.handleError);
  }

  private deleteTodos(todos: Todo[]) {
    for (const todo of todos) {
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
    return this.httpClient.put(this.url + '/' + todo._id['$oid'] + '?' + this.key, todo)
      .catch(this.handleError);
  }

  private extractToDos(response: HttpResponse<Todo[]>) {
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
