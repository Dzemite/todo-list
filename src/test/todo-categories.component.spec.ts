import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CategoriesComponent } from "../app/todo/todo-categories/todo-categories.component";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { RouterStub } from "../testing-helpers/router-stubs";
import { CategoriesService } from "../app/todo/todo-services/categories.service";
import { HttpModule } from "@angular/http";
import { TodoListService } from "../app/todo/todo-services/todo-list.service";


describe('CategoriesComponent', () => {
  let fixture: ComponentFixture<CategoriesComponent>,
      component: CategoriesComponent,
      de: DebugElement,
      el: HTMLElement;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoriesComponent
      ],
      imports: [HttpModule],
      providers: [
        {provide: Router, useClass: RouterStub},
        CategoriesService,
        TodoListService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
  });

  it('should render "Categories"', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('Categories');
  });
});

