import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LivreHttpService } from 'src/app/services/http/livre-http.service';

@Component({
  selector: 'app-livre-add',
  templateUrl: './livre-add.component.html',
  styleUrls: ['./livre-add.component.css'],
})
export class LivreAddComponent implements OnInit {
  myForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private ls: LivreHttpService,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
