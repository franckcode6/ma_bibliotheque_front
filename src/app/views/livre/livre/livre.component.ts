import { Component, Input, OnInit } from '@angular/core';
import { Livre } from 'src/app/models/livre.model';

@Component({
  selector: '[app-livre]',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css'],
})
export class LivreComponent implements OnInit {
  @Input() livre?: Livre;

  constructor() {}

  ngOnInit(): void {}
}
