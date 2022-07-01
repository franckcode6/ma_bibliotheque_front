import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from 'src/app/models/categorie.model';
const url = 'http://127.0.0.1:8080/api/categories';

@Injectable({
  providedIn: 'root',
})
export class CategorieHttpService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(url);
  }

  findOne(id: number): Observable<Categorie> {
    return this.httpClient.get<Categorie>(`${url}/${id}`);
  }
}
