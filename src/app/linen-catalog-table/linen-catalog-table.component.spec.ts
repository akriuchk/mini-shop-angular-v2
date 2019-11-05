import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinenCatalogTableComponent } from './linen-catalog-table.component';

describe('LinenCatalogTableComponent', () => {
  let component: LinenCatalogTableComponent;
  let fixture: ComponentFixture<LinenCatalogTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinenCatalogTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinenCatalogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
