import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmListResponse } from '../models/films-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilmList(): Observable<FilmListResponse> {
    return this.http.get<FilmListResponse>('https://swapi.dev/api/films/');
  }
}
