import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {TodoListService} from "../todo-services/todo-list.service";
import {Todo} from "./todo";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: "todo-list",
  templateUrl: "todo-list.component.html",
  styleUrls: [
    "todo-list.component.css",
    "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  errorMessage: string;
  categoryId: string;
  categoryName: string;
  todoForm: FormGroup;

  private newTodo: Todo = new Todo(null, null, false, null);


  constructor(private activatedRoute: ActivatedRoute,
              private service: TodoListService,
              private fb: FormBuilder) {  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.categoryId = params["id"];
      this.categoryName = params["category"];
      this.refreshTodos();
    });
    this.buildForm();
  }

  buildForm() {
    this.todoForm = this.fb.group({
      "todo": [this.newTodo.name, [
        Validators.maxLength(55)
      ]]
    });
  }

  changeTodoCompleteField(todoId: any) {
    this.todos[todoId].completed = !this.todos[todoId].completed;
  }

  updateTodo(todo: Todo) {
    this.service.editTodo(todo)
      .subscribe(
        () => {},
        error => this.errorMessage = error
      )
  }

  addNewTodo(newTodo: string) {
    if (!newTodo) return;
    var todo: Todo = new Todo(null, newTodo, false, this.categoryId);
    this.service.addTodo(todo)
      .subscribe(
        () => this.refreshTodos(),
        error => this.errorMessage = error
      );
  }

  editTodo(todo: Todo) {
    let newTodo = prompt('Put new todo.', todo.name);

    if (newTodo) {
      todo.name = newTodo;
      this.service.editTodo(todo)
        .subscribe(
          () => this.refreshTodos(),
          error => this.errorMessage = error
        )
    }
  }

  deleteTodo(todo: Todo) {
    confirm("Вы точно хотите удалить задачу " + todo.name + "?") ?
      this.service.deleteTodo(todo._id)
        .subscribe(
          () => this.refreshTodos(),
          error => this.errorMessage = error
        )
      : null;
  }

  isCompleted(todo: Todo): string {
    if (!todo.completed) {
      return
    }
    return "task-completed"
  }

  private refreshTodos() {
    this.service.getTodos(this.categoryId)
      .subscribe(
        todos => this.todos = todos,
        error => this.errorMessage = error
      );
  }
}
