import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportResultTableComponent } from './import-result-table.component';

describe('ImportResultTableComponent', () => {
  let component: ImportResultTableComponent;
  let fixture: ComponentFixture<ImportResultTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportResultTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportResultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
