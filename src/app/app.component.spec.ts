import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('AppComponent', () => {
  let component: AppComponent,
      fixture: ComponentFixture<AppComponent>,
      de: DebugElement,
      el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Should render title in a h1 tag', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('ToDo List');
  });

  it ('Should render a different title', () => {
    component.title = 'Different title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Different title');
  });
});
