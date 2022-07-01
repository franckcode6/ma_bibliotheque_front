import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from 'src/app/models/type.model';
const url = 'http://127.0.0.1:8080/api/types';

@Injectable({
  providedIn: 'root',
})
export class TypeHttpService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Type[]> {
    return this.httpClient.get<Type[]>(url);
  }

  findOne(id: number): Observable<Type> {
    return this.httpClient.get<Type>(`${url}/${id}`);
  }
}
