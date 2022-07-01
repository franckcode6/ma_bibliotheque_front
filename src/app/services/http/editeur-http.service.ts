import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editeur } from 'src/app/models/editeur.model';
const url = 'http://127.0.0.1:8080/api/editeurs';

@Injectable({
  providedIn: 'root',
})
export class EditeurHttpService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Editeur[]> {
    return this.httpClient.get<Editeur[]>(url);
  }

  findOne(id: number): Observable<Editeur> {
    return this.httpClient.get<Editeur>(`${url}/${id}`);
  }
}
