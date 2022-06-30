import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuteurDetailComponent } from './auteur-detail.component';

describe('AuteurDetailComponent', () => {
  let component: AuteurDetailComponent;
  let fixture: ComponentFixture<AuteurDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuteurDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuteurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
