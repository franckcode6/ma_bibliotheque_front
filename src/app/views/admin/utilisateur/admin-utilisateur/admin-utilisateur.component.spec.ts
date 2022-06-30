import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUtilisateurComponent } from './admin-utilisateur.component';

describe('AdminUtilisateurComponent', () => {
  let component: AdminUtilisateurComponent;
  let fixture: ComponentFixture<AdminUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
