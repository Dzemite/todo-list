import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoComponent', () => {

  let fixture: ComponentFixture<TodoComponent>,
      component: TodoComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the todo component', async(() => {
    expect(component).toBeTruthy();
  }));
});
