import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/models/livre.model';
import { LivreHttpService } from 'src/app/services/http/livre-http.service';

@Component({
  selector: 'app-admin-livre-list',
  templateUrl: './admin-livre-list.component.html',
  styleUrls: ['./admin-livre-list.component.css'],
})
export class AdminLivreListComponent implements OnInit {
  livres?: Livre[];

  constructor(private livreHttpService: LivreHttpService) {}

  ngOnInit(): void {
    this.livreHttpService.findAll().subscribe((data) => (this.livres = data));
  }
}
