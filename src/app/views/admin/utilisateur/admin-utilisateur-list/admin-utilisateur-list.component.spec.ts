import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUtilisateurListComponent } from './admin-utilisateur-list.component';

describe('AdminUtilisateurListComponent', () => {
  let component: AdminUtilisateurListComponent;
  let fixture: ComponentFixture<AdminUtilisateurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUtilisateurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUtilisateurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
