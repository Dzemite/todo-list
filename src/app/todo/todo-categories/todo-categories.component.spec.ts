import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CategoriesComponent } from './todo-categories.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterStub } from '../../../testing-helpers/router-stubs';
import { CategoriesService } from '../todo-services/categories.service';
import { HttpModule } from '@angular/http';
import { TodoListService } from '../todo-services/todo-list.service';
import { Observable } from 'rxjs';
import { Category } from './category';


describe('CategoriesComponent', () => {
  let fixture: ComponentFixture<CategoriesComponent>,
      component: CategoriesComponent,
      de: DebugElement,
      el: HTMLElement,

      categoriesService: CategoriesService,
      spy: jasmine.Spy;

  const testCategories: Category[] = [
    {_id: '0', name: 'category 1'},
    {_id: '1', name: 'category 2'},
    {_id: '2', name: 'category 3'}
  ];

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

    categoriesService = fixture.debugElement.injector.get(CategoriesService);
    spy = spyOn(categoriesService, 'getCategories')
      .and.returnValue(Observable.of(testCategories));

  });

  it('Should render "Categories"', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('Categories');
  });

  it('Should get array of Category', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      expect(spy.calls.any()).toBe(true, 'getCategories called');

      expect(component.categories[0]._id).toBe('0');
      expect(component.categories[1]._id).toBe('1');
      expect(component.categories[2]._id).toBe('2');

      expect(component.categories[0].name).toBe('category 1');
      expect(component.categories[1].name).toBe('category 2');
      expect(component.categories[2].name).toBe('category 3');
    });
  }));
});

