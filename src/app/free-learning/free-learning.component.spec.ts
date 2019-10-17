import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeLearningComponent } from './free-learning.component';

describe('FreeLearningComponent', () => {
  let component: FreeLearningComponent;
  let fixture: ComponentFixture<FreeLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
