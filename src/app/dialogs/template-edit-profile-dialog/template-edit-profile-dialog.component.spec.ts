import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEditProfileDialogComponent } from './template-edit-profile-dialog.component';

describe('TemplateEditProfileDialogComponent', () => {
  let component: TemplateEditProfileDialogComponent;
  let fixture: ComponentFixture<TemplateEditProfileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEditProfileDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEditProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
