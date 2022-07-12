import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur.model';
import { UtilisateurHttpService } from '../http/utilisateur-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;
  utilisateurConnecte!: Utilisateur;

  constructor(
    private utilisateurHttpService: UtilisateurHttpService,
    private router: Router
  ) {}

  /**
   * Method to signin the user
   */
  signIn(email: string, password: string) {
    this.utilisateurHttpService
      .findOneByEmail(email)
      .subscribe((utilisateur) => (this.utilisateurConnecte = utilisateur));
    if (this.utilisateurConnecte != null) {
      if (this.utilisateurConnecte.motDePasse === password) {
        this.isAuth = true;
        this.router.navigate(['livres']);
      } else {
        console.log('Le mot de passe est invalide');
      }
    } else {
      console.log('Adresse mail invalide');
    }
  }

  /**
   * Method to signout the user
   */
  signOut() {
    this.isAuth = false;
  }
}
