import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auteur } from 'src/app/models/auteur.model';
import { Categorie } from 'src/app/models/categorie.model';
import { Editeur } from 'src/app/models/editeur.model';
import { Type } from 'src/app/models/type.model';
import { AuteurHttpService } from 'src/app/services/http/auteur-http.service';
import { CategorieHttpService } from 'src/app/services/http/categorie-http.service';
import { EditeurHttpService } from 'src/app/services/http/editeur-http.service';
import { LivreHttpService } from 'src/app/services/http/livre-http.service';
import { TypeHttpService } from 'src/app/services/http/type-http.service';

@Component({
  selector: 'app-livre-add',
  templateUrl: './livre-add.component.html',
  styleUrls: ['./livre-add.component.css'],
})
export class LivreAddComponent implements OnInit {
  myForm!: FormGroup;
  submitted: boolean = false;
  auteurs?: Auteur[];
  editeurs?: Editeur[];
  categories?: Categorie[];
  types?: Type[];

  constructor(
    private fb: FormBuilder,
    private ls: LivreHttpService,
    private as: AuteurHttpService,
    private es: EditeurHttpService,
    private ts: TypeHttpService,
    private cs: CategorieHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.as.findAll().subscribe((data) => (this.auteurs = data));
    this.cs.findAll().subscribe((data) => (this.categories = data));
    this.es.findAll().subscribe((data) => (this.editeurs = data));
    this.ts.findAll().subscribe((data) => (this.types = data));
    this.myForm = this.fb.group({
      titre: ['', Validators.required],
      isbn: [''],
      dateDeParution: ['', Validators.required],
      type: this.fb.group({
        id: '',
      }),
      editeur: this.fb.group({
        id: '',
      }),
      categorie: this.fb.group({
        id: '',
      }),
      auteur: this.fb.group({
        id: '',
      }),
      utilisateur: this.fb.group({
        id: 3,
      }),
    });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.myForm.valid) {
      this.ls
        .add(this.myForm.value)
        .subscribe(() => this.router.navigateByUrl('/livres'));
      console.log('VALID FORM');
    } else {
      console.error('INVALID FORM');
    }
  }
}
