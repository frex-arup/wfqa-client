import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLabResultComponent } from './input-lab-result.component';

describe('InputLabResultComponent', () => {
  let component: InputLabResultComponent;
  let fixture: ComponentFixture<InputLabResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLabResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLabResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
