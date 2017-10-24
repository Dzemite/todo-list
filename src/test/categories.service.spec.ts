import {TestBed, inject, async} from '@angular/core/testing';
import {CategoriesService} from "../app/todo/todo-services/categories.service";
import {Category} from "../app/todo/todo-categories/category";
import {Http, HttpModule, ConnectionBackend} from "@angular/http";
import {TodoListService} from "../app/todo/todo-services/todo-list.service";
import {TodoListComponent} from "../app/todo/todo-list/todo-list.component";
import {CategoriesComponent} from "../app/todo/todo-categories/todo-categories.component";
import {TodoComponent} from "../app/todo/todo.component";
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {TodoRoutingModule} from "../app/todo/todo-routing.module";
import {CommonModule} from "@angular/common";

describe('Categories service', () => {
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

  let testCateg: Category = new Category(null, 'testCategory');

  // describe('addCategory()', () => {
  //   it('Should add new category', inject([CategoriesService], (service: CategoriesService) => {
  //     let created: boolean;
  //     service.addCategory(testCateg)
  //       .subscribe(
  //         () => {created = true},
  //         error => {created = false}
  //       );
  //     expect(created).toBeTruthy();
  //   }));
  // });


});
