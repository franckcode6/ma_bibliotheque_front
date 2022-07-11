import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from 'src/app/models/livre.model';
const url = 'http://127.0.0.1:8080/api/livres';

@Injectable({
  providedIn: 'root',
})
export class LivreHttpService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Livre[]> {
    return this.httpClient.get<Livre[]>(url);
  }

  findOne(id: number): Observable<Livre> {
    return this.httpClient.get<Livre>(`${url}/${id}`);
  }

  add(livre: Livre): Observable<Livre> {
    return this.httpClient.post<Livre>(url, livre);
  }

  delete(id: number): Observable<Livre> {
    return this.httpClient.delete<Livre>(`${url}/${id}`);
  }
}
