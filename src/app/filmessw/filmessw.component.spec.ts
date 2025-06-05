import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesswComponent } from './filmessw.component';

describe('FilmesswComponent', () => {
  let component: FilmesswComponent;
  let fixture: ComponentFixture<FilmesswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmesswComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmesswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
