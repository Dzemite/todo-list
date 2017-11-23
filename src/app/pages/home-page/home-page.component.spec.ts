import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HomePageComponent } from './home-page.component';
import { RouterLinkStubDirective } from '../../../testing-helpers/index';
import { RouterStub } from '../../../testing-helpers/router-stubs';
import { Router } from '@angular/router';

describe('HomePageComponent', () => {
  let component: HomePageComponent,
    fixture: ComponentFixture<HomePageComponent>,
    de: DebugElement,
    el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        RouterLinkStubDirective
      ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  let links: RouterLinkStubDirective[],
      linkDes: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;

    fixture.detectChanges();
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));
    links = linkDes
      .map(d => d.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
  });

  it('should render greet in a h2 tag', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('Welcome to ToDo app');
  });
  it('can get RouterLinks from template', () => {
    expect(links.length).toBe(1, 'should have 1 links');
    expect(links[0].linkParams).toBe('/todo', '1st link should go to todo');
  });
});
