import { Component, Input, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur.model';

@Component({
  selector: '[app-admin-utilisateur]',
  templateUrl: './admin-utilisateur.component.html',
  styleUrls: ['./admin-utilisateur.component.css'],
})
export class AdminUtilisateurComponent implements OnInit {
  @Input() utilisateur?: Utilisateur;

  constructor() {}

  ngOnInit(): void {}
}
