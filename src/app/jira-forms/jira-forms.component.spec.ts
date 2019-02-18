import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraFormsComponent } from './jira-forms.component';

describe('JiraFormsComponent', () => {
  let component: JiraFormsComponent;
  let fixture: ComponentFixture<JiraFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
