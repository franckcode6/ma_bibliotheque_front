import { Component, Input, OnInit } from '@angular/core';
import { Livre } from 'src/app/models/livre.model';

@Component({
  selector: '[app-admin-livre]',
  templateUrl: './admin-livre.component.html',
  styleUrls: ['./admin-livre.component.css'],
})
export class AdminLivreComponent implements OnInit {
  @Input() livre?: Livre;

  constructor() {}

  ngOnInit(): void {}
}
