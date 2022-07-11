import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurHttpService } from 'src/app/services/http/utilisateur-http.service';

@Component({
  selector: '[app-admin-utilisateur]',
  templateUrl: './admin-utilisateur.component.html',
  styleUrls: ['./admin-utilisateur.component.css'],
})
export class AdminUtilisateurComponent implements OnInit {
  @Input() utilisateur!: Utilisateur;

  constructor(private us: UtilisateurHttpService, private router: Router) {}

  ngOnInit(): void {}

  delete() {
    this.us
      .delete(this.utilisateur.id)
      .subscribe((result) => this.router.navigateByUrl('/admin/utilisateurs'));
  }
}
