import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLabResultDetailComponent } from './input-lab-result-detail.component';

describe('InputLabResultDetailComponent', () => {
  let component: InputLabResultDetailComponent;
  let fixture: ComponentFixture<InputLabResultDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLabResultDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLabResultDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
