import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurHttpService } from 'src/app/services/http/utilisateur-http.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  myForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private us: UtilisateurHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      motDePasse: ['', Validators.required],
      dateDeNaissance: ['', Validators.required],
    });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.myForm.valid) {
      this.us
        .add(this.myForm.value)
        .subscribe(() => this.router.navigateByUrl(''));
      console.log('VALID FORM');
    } else {
      console.error('INVALID FORM');
    }
  }
}
