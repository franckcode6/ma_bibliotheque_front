import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurHttpService } from 'src/app/services/http/utilisateur-http.service';

@Component({
  selector: 'app-admin-utilisateur-list',
  templateUrl: './admin-utilisateur-list.component.html',
  styleUrls: ['./admin-utilisateur-list.component.css'],
})
export class AdminUtilisateurListComponent implements OnInit {
  utilisateurs?: Utilisateur[];

  constructor(private utilisateurHttpService: UtilisateurHttpService) {}

  ngOnInit(): void {
    this.utilisateurHttpService
      .findAll()
      .subscribe((data) => (this.utilisateurs = data));
  }
}
