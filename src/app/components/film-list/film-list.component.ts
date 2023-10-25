import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Film } from 'src/app/models/films-interface';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmList: Film[] = [];

  constructor(private filmsService: FilmsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.filmsService.getFilmList().subscribe(resp => {
      this.filmList = resp.results;
    });
  }

  openModal(modal: any, film: Film) {
    this.modalService.open(modal, {
      keyboard: false,
      scrollable: true
    })
  }

}
