import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {TodoListService} from '../todo-services/todo-list.service';
import {Todo} from '../../entities/todo';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {TemplateDeleteDialogComponent} from '../../dialogs/template-delete-dialog/template-delete-dialog.component';
import {MatDialog} from '@angular/material';
import {AppSettings} from '../../app.settings';
import {TemplateEditTodoDialogComponent} from '../../dialogs/template-edit-todo-dialog/template-edit-todo-dialog.component';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: [
    'todo-list.component.less',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  new: Todo[];
  inProgress: Todo[];
  inTesting: Todo[];
  completedTodo: Todo[];

  errorMessage: string;
  categoryId: string;
  categoryName: string;
  todoForm: FormGroup;

  private completed = 'task-completed';

  @ViewChild('newTodo') newTodo: ElementRef;

  constructor(private activatedRoute: ActivatedRoute,
              private service: TodoListService,
              private dialog: MatDialog) {  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.categoryId = params['id'];
      this.categoryName = params['category'];
      this.refreshTodos();
    });
    this.buildForm();
  }

  buildForm() {
    this.todoForm = new FormGroup({
      todo: new FormControl('', Validators.maxLength(55))
    });
  }

  changeTodoCompleteField(todoId: any) {
    this.todos[todoId].completed = !this.todos[todoId].completed;

    this.service.editTodo(this.todos[todoId])
      .subscribe(
        () => {},
        error => this.errorMessage = error
      );
  }

  addNewTodo(newTodo: string) {
    if (!newTodo || this.todoForm.get('todo').hasError('maxlength')) { return; }

    const todo: Todo = new Todo(null, newTodo, this.categoryId);
    this.service.addTodo(todo)
      .subscribe(
        () => this.refreshTodos(),
        error => this.errorMessage = error
      );
    this.newTodo.nativeElement.value = '';
  }

  editTodo(todo: Todo) {
    const dialogRef = this.dialog.open(TemplateEditTodoDialogComponent, {
      data: {
        todo: todo
      },
      width: AppSettings.EDIT_DIALOG_WIDTH
    });

    dialogRef.afterClosed().subscribe( res => { console.log(`changed todo: ${JSON.stringify(res)}`);
      this.service.editTodo(res)
        .subscribe(
          () => this.refreshTodos(),
          error => this.errorMessage = error
        );
    });
  }

  deleteTodo(todo: Todo) {
    const dialogRef = this.dialog.open(TemplateDeleteDialogComponent, {
      width: AppSettings.DELETE_DIALOG_WIDTH,
      data: {
        name: todo.name,
        type: 'task'
      }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) { this._deleteTodo(todo); }
    });
  }

  setClassTaskCompleted(todo: Todo): string {
    return this.isCompleted(todo) ? this.completed : '';
  }

  private _deleteTodo(todo: Todo) {
    this.service.deleteTodo(todo._id)
      .subscribe(
        () => this.refreshTodos(),
        error => this.errorMessage = error
      );
  }

  private isCompleted(todo: Todo): boolean {
    if (!todo.completed) {
      return;
    }
    return true;
  }

  private refreshTodos() {
    this.service.getTodos(this.categoryId)
      .subscribe(
        todos => {
          this.todos = todos;
          this.new = [];
          this.inProgress = [];
          this.inTesting = [];
          this.completedTodo = [];
          if (this.todos) {
            this.todos.forEach(todo => {
              if (todo.inProgress && todo.inTesting && todo.completed) {
                this.completedTodo.push(todo);
              } else
              if (todo.inProgress && todo.inTesting && !todo.completed) {
                this.inTesting.push(todo);
              } else
              if (todo.inProgress && !todo.inTesting && !todo.completed) {
                this.inProgress.push(todo);
              } else
              if (!todo.inProgress && !todo.inTesting && !todo.completed) {
                this.new.push(todo);
              }
            });
          }
        },
        error => this.errorMessage = error
      );
  }
}
