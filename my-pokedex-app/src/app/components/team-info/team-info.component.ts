import { Component, Input } from '@angular/core';
import { PokemonComponent } from './pokemon/pokemon.component';

@Component({
  selector: 'app-team-info',
  imports: [PokemonComponent],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.css',
})
export class TeamInfoComponent {
  @Input() name?: string;
}
