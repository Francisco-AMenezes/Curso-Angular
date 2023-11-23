import { Injectable } from '@angular/core';
import { Games } from '../Games';
import { filter } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  private apiUrl = 'http://localhost:3000/Games';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Games[]> {
    return this.http.get<Games[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Games> {
    return this.http.get<Games>(`${this.apiUrl}/${id}`);
    console.log("numero" ,id)
  }

}