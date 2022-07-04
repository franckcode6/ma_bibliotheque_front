import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-utilisateur-detail',
  templateUrl: './utilisateur-detail.component.html',
  styleUrls: ['./utilisateur-detail.component.css'],
})
export class UtilisateurDetailComponent implements OnInit {
  utilisateur!: Utilisateur;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.utilisateur = this.authService.utilisateurConnecte;
  }
}
