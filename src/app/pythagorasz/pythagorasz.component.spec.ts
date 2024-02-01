import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythagoraszComponent } from './pythagorasz.component';

describe('PythagoraszComponent', () => {
  let component: PythagoraszComponent;
  let fixture: ComponentFixture<PythagoraszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythagoraszComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PythagoraszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
