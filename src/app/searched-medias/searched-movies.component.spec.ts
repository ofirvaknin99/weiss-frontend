import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedMediasComponent } from './searched-medias.component';

describe('SearchedMoviesComponent', () => {
  let component: SearchedMediasComponent;
  let fixture: ComponentFixture<SearchedMediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedMediasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
