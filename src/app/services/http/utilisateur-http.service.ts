import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/models/livre.model';
import { Utilisateur } from 'src/app/models/utilisateur.model';
const url = 'http://127.0.0.1:8080/api/utilisateurs';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurHttpService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(url);
  }

  findOne(id: number): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(`${url}/${id}`);
  }

  findOneByEmail(email: string): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(`${url}/${email}`);
  }

  add(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.httpClient.post<Utilisateur>(url, utilisateur);
  }
}
