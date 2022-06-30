import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auteur } from 'src/app/models/auteur.model';
import { AuteurHttpService } from 'src/app/services/http/auteur-http.service';
import { LivreHttpService } from 'src/app/services/http/livre-http.service';

@Component({
  selector: 'app-auteur-detail',
  templateUrl: './auteur-detail.component.html',
  styleUrls: ['./auteur-detail.component.css'],
})
export class AuteurDetailComponent implements OnInit {
  auteur!: Auteur;

  constructor(
    private activatedRoute: ActivatedRoute,
    private auteurHttpService: AuteurHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('fetch from api id:', id);
    this.auteurHttpService
      .findOne(Number(id))
      .subscribe((auteur) => (this.auteur = auteur));
  }
}
