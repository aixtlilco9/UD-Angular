import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAssignmentThreeComponent } from './practice-assignment-three.component';

describe('PracticeAssignmentThreeComponent', () => {
  let component: PracticeAssignmentThreeComponent;
  let fixture: ComponentFixture<PracticeAssignmentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeAssignmentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeAssignmentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
