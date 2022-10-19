import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MroComponent } from './mro.component';

describe('MroComponent', () => {
  let component: MroComponent;
  let fixture: ComponentFixture<MroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
