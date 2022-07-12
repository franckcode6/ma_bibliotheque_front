import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRoute, state: RouterStateSnapshot): any {
    if (
      this.authService.isAuth &&
      this.authService.utilisateurConnecte.email === 'admin@hb.com'
    ) {
      return true;
    }
    this.router.navigate(['']);
  }
}
