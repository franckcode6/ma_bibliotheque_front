import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auteur } from 'src/app/models/auteur.model';
const url = 'http://127.0.0.1:8080/api/auteurs';

@Injectable({
  providedIn: 'root',
})
export class AuteurHttpService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Auteur[]> {
    return this.httpClient.get<Auteur[]>(url);
  }

  findOne(id: number): Observable<Auteur> {
    return this.httpClient.get<Auteur>(`${url}/${id}`);
  }
}
