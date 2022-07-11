import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from 'src/app/models/livre.model';
import { LivreHttpService } from 'src/app/services/http/livre-http.service';

@Component({
  selector: '[app-admin-livre]',
  templateUrl: './admin-livre.component.html',
  styleUrls: ['./admin-livre.component.css'],
})
export class AdminLivreComponent implements OnInit {
  @Input() livre!: Livre;

  constructor(private ls: LivreHttpService, private router: Router) {}

  ngOnInit(): void {}

  delete() {
    this.ls
      .delete(this.livre.id)
      .subscribe((result) => this.router.navigateByUrl('/admin/livres'));
  }
}
