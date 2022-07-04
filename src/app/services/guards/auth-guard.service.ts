import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRoute, state: RouterStateSnapshot): any {
    if (this.authService.isAuth) {
      return true;
    }
    this.router.navigate(['']);
  }
}
