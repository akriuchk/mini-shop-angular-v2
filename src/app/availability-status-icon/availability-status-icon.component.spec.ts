import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityStatusIconComponent } from './availability-status-icon.component';

describe('AvailabilityStatusIconComponent', () => {
  let component: AvailabilityStatusIconComponent;
  let fixture: ComponentFixture<AvailabilityStatusIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailabilityStatusIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilityStatusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
