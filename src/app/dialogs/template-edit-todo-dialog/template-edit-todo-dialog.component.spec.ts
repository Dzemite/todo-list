import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEditTodoDialogComponent } from './template-edit-todo-dialog.component';

describe('TemplateEditTodoDialogComponent', () => {
  let component: TemplateEditTodoDialogComponent;
  let fixture: ComponentFixture<TemplateEditTodoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEditTodoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEditTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
