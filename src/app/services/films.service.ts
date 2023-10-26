import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmListResponse } from '../models/films-interface';
import { Observable } from 'rxjs';
import { FilmDetails } from '../models/film-details.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilmList(): Observable<FilmListResponse> {
    return this.http.get<FilmListResponse>('https://swapi.dev/api/films/');
  }

  getFilmById(id: String): Observable<FilmDetails> {
    return this.http.get<FilmDetails>("https://swapi.dev/api/films/" + id + "/")
  }
}
