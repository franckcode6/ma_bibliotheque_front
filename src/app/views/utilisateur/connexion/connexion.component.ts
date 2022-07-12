import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UtilisateurHttpService } from 'src/app/services/http/utilisateur-http.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  myForm!: FormGroup;
  errorMsg: string = '';
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private us: UtilisateurHttpService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      motDePasse: ['', Validators.required],
    });
  }

  onSubmitSignIn() {
    const email: string = this.myForm.value.email;
    const password: string = this.myForm.value.motDePasse;

    this.authService.signIn(email, password);
  }
}
