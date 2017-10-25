///<reference path="../../node_modules/@angular/core/testing/src/test_bed.d.ts"/>
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { TodoListComponent } from "../app/todo/todo-list/todo-list.component";
import {ConnectionBackend, HttpModule, Http} from "@angular/http";
import {CategoriesService} from "../app/todo/todo-services/categories.service";
import {CategoriesComponent} from "../app/todo/todo-categories/todo-categories.component";
import {TodoComponent} from "../app/todo/todo.component";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {TodoRoutingModule} from "../app/todo/todo-routing.module";
import {CommonModule} from "@angular/common";
import {TodoListService} from "../app/todo/todo-services/todo-list.service";

describe('TodoListComponent', () => {
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

  it('Should create the todo list', async(() => {
    const fixture = TestBed.createComponent(TodoListComponent);
    const todoList = fixture.debugElement.componentInstance;
    expect(todoList).toBeTruthy();
  }));
});

