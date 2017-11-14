import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDeleteDialogComponent } from './template-delete-dialog.component';

describe('TemplateDeleteDialogComponent', () => {
  let component: TemplateDeleteDialogComponent;
  let fixture: ComponentFixture<TemplateDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
