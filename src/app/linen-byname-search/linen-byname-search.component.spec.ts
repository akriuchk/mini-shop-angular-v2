import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinenBynameSearchComponent } from './linen-byname-search.component';

describe('LinenBynameSearchComponent', () => {
  let component: LinenBynameSearchComponent;
  let fixture: ComponentFixture<LinenBynameSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinenBynameSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinenBynameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
