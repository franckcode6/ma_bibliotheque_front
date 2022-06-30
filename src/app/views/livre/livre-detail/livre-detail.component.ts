import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from 'src/app/models/livre.model';
import { LivreHttpService } from 'src/app/services/http/livre-http.service';

@Component({
  selector: 'app-livre-detail',
  templateUrl: './livre-detail.component.html',
  styleUrls: ['./livre-detail.component.css'],
})
export class LivreDetailComponent implements OnInit {
  livre!: Livre;

  constructor(
    private activatedRoute: ActivatedRoute,
    private livreHttpService: LivreHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('fetch from api id:', id);
    this.livreHttpService
      .findOne(Number(id))
      .subscribe((livre) => (this.livre = livre));
  }
}
