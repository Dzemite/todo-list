import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HomePageComponent } from "../app/home-page/home-page.component";

describe('HomePageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomePageComponent
      ],
    }).compileComponents();
  }));
  it('should create the home page', async(() => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const home = fixture.componentInstance;
    expect(home).toBeTruthy();
  }));
  it('should render greet in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Welcome to ToDo app');
  }));
});
