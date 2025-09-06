import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../models/pokemon.model';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [LowerCasePipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  @Input({ required: true }) pokemon!: Pokemon;
}
