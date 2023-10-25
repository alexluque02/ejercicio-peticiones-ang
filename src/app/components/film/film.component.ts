import { Component, Input, Output } from '@angular/core';
import { Film } from 'src/app/models/films-interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {

  @Input() film!: Film;

}
