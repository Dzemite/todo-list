import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { TodoComponent } from "../app/todo/todo.component";
import { CategoriesComponent} from "../app/todo/todo-categories/todo-categories.component";
import { TodoListService} from "../app/todo/todo-services/todo-list.service";
import { CategoriesService} from "../app/todo/todo-services/categories.service";
import { TodoListComponent} from "../app/todo/todo-list/todo-list.component";
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { AngularFontAwesomeModule} from "angular-font-awesome";
import { TodoRoutingModule} from "../app/todo/todo-routing.module";
import { CommonModule} from "@angular/common";
import { Http, ConnectionBackend, HttpModule} from "@angular/http";

describe('TodoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        TodoRoutingModule,
        AngularFontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpModule
      ],
      declarations: [
        TodoComponent,
        CategoriesComponent,
        TodoListComponent
      ],
      providers: [
        CategoriesService,
        TodoListService,
        Http,
        ConnectionBackend
      ]
    }).compileComponents();
  }));
  it('should create the todo component', async(() => {
    const fixture = TestBed.createComponent(TodoComponent);
    const todo = fixture.debugElement.componentInstance;
    expect(todo).toBeTruthy();
  }));
});
