import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpModule } from "@angular/http";
import { Observable } from "rxjs";
import { Todo } from "./todo";
import { TodoListComponent } from "./todo-list.component";
import { TodoListService } from "../todo-services/todo-list.service";
import { RouterStub } from "../../../testing-helpers/router-stubs";
import { FormBuilder } from "@angular/forms";


describe('TodoListComponent', () => {
  let fixture: ComponentFixture<TodoListComponent>,
    component: TodoListComponent,

    todoListService: TodoListService,
    spy: jasmine.Spy;

  const testTodoList: Todo[] = [
    {_id: '0', name: 'todo 1', completed: false, categoryID: 'qwe123ert'},
    {_id: '1', name: 'todo 2', completed: true, categoryID: 'qwe123ert'},
    {_id: '2', name: 'todo 3', completed: false, categoryID: 'qwe123ert'}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent
      ],
      imports: [HttpModule],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useValue: { params: Observable.of({category: 'testCategoryName'}) }},
        TodoListService,
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

    todoListService = fixture.debugElement.injector.get(TodoListService);
    spy = spyOn(todoListService, 'getTodos')
      .and.returnValue(Observable.of(testTodoList));

  });

  it('Should set category name', () => {
    fixture.detectChanges();
    expect(component.categoryName).toBe('testCategoryName');
  });

  it('Should get array of Todos', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(spy.calls.any()).toBe(true, 'getTodos called');

      expect(component.todos[0]._id).toBe('0');
      expect(component.todos[1]._id).toBe('1');
      expect(component.todos[2]._id).toBe('2');

      expect(component.todos[0].name).toBe('todo 1');
      expect(component.todos[1].name).toBe('todo 2');
      expect(component.todos[2].name).toBe('todo 3');

      expect(component.todos[0].completed).toBeFalsy();
      expect(component.todos[1].completed).toBeTruthy();
      expect(component.todos[2].completed).toBeFalsy();

      expect(component.todos[0].categoryID).toBe('qwe123ert');
      expect(component.todos[1].categoryID).toBe('qwe123ert');
      expect(component.todos[2].categoryID).toBe('qwe123ert');
    });
  }));

  it('Should change todo status', () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let currentStatus: boolean = component.todos[0].completed;
      component.changeTodoCompleteField(component.todos[0]._id);

      expect(component.todos[0].completed).toBe(!currentStatus);
    });
  });

  it('Should return css class or completed task', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.isCompleted(component.todos[0])).toBe('task-completed');
    });
  });
});


