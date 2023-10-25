import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from 'src/app/models/films-interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {

  @Input() film!: Film;
  @Output() filmClick = new EventEmitter<Film>();

  getFilmId() {
    return this.film.url.split("/").reverse()[1];
  }

  getImagenUrl() {
    const ID = this.getFilmId();
    return "https://starwars-visualguide.com/assets/img/films/" + ID + ".jpg"
  }

  viewFilmDetails() {
    this.filmClick.emit(this.film);
  }

}
