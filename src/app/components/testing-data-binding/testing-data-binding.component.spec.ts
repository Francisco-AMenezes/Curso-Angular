import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingDataBindingComponent } from './testing-data-binding.component';

describe('TestingDataBindingComponent', () => {
  let component: TestingDataBindingComponent;
  let fixture: ComponentFixture<TestingDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
