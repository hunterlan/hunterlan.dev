import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkraineComponent } from './ukraine.component';

describe('UkraineComponent', () => {
  let component: UkraineComponent;
  let fixture: ComponentFixture<UkraineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UkraineComponent]
    });
    fixture = TestBed.createComponent(UkraineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
