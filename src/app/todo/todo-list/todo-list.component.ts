import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {TodoListService} from "../todo-services/todo-list.service";
import {Todos} from "./todo";

@Component({
  moduleId: module.id,
  selector: "todo-list",
  templateUrl: "todo-list.component.html",
  styleUrls: ["todo-list.component.css"]
})
export class TodoListComponent implements OnInit {

  todos: Todos;
  errorMessage: string;
  categoryId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private service: TodoListService) {
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.categoryId = params["id"];
      this.updateTodos();
    });
  }

  addNewTodo(newTodo: string) {
    this.todos.tasks.push({name: newTodo, completed: false});
    this.service.refrashTodo(this.todos)
      .subscribe(
        () => {},
        error => this.errorMessage = error
      );
  }

  editTodo(todo: any, index: number) {
    let newTodo = prompt('Put new task.', todo.name);

    if (newTodo) {
      this.todos.tasks[index].name = newTodo;
      this.service.refrashTodo(this.todos)
        .subscribe(
          () => {},
          error => this.errorMessage = error
        )
    }
  }

  deleteTodo(todo: any, index: number) {
    confirm("Вы точно хотите удалить задачу " + todo.name + "?") ?
      (() => {
        this.todos.tasks.splice(index, 1);
        this.service.refrashTodo(this.todos)
          .subscribe(
            () => {},
            error => this.errorMessage = error
          )
      })()
      : null;
  }

  private updateTodos() {
    this.service.getTodos(this.categoryId)
      .subscribe(
        todos => this.todos = todos,
        error => {
          this.errorMessage = error;
          if (!this.todos._id) {
            this.service.createTodoList(this.categoryId)
          };
          console.log("todoes: ", this.todos);
        }
      );
  }
}
