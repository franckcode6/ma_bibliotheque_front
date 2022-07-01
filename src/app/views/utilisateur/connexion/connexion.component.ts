import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurHttpService } from 'src/app/services/http/utilisateur-http.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  myForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private us: UtilisateurHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      motDePasse: ['', Validators.required],
    });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.myForm.valid) {
      console.log('VALID FORM');
    } else {
      console.error('INVALID FORM');
    }
  }
}
