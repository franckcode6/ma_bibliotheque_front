import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLivreListComponent } from './admin-livre-list.component';

describe('AdminLivreListComponent', () => {
  let component: AdminLivreListComponent;
  let fixture: ComponentFixture<AdminLivreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLivreListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLivreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
