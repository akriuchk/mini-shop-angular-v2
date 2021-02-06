import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSuggestionsComponent } from './image-suggestions.component';

describe('ImageSuggestionsComponent', () => {
  let component: ImageSuggestionsComponent;
  let fixture: ComponentFixture<ImageSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
