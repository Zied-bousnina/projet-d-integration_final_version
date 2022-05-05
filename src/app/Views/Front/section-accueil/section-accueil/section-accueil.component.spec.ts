import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAccueilComponent } from './section-accueil.component';

describe('SectionAccueilComponent', () => {
  let component: SectionAccueilComponent;
  let fixture: ComponentFixture<SectionAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
