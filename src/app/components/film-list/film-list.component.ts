import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmDetails } from 'src/app/models/film-details.interface';

import { Film } from 'src/app/models/films-interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList: Film[] = [];
  filmDetails!: FilmDetails;
  loading = true;
  loadingModal = true;

  constructor(private filmsService: FilmsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.filmsService.getFilmList().subscribe(resp => {
      this.filmList = resp.results;
      this.loading = false;
    });
  }

  openModal(id: any, modal: any) {
    this.loadingModal = true;
    this.modalService.open(modal,
      {
        keyboard: false
      }
    )
    this.filmsService.getFilmById(id).subscribe(film => {
      this.filmDetails = film;
      this.loadingModal = false;
    });
  }

}
