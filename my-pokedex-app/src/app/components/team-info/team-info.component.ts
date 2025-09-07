import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { CardComponent } from '../../shared/card/card.component';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-team-info',
  imports: [PokemonComponent, AddPokemonComponent, CardComponent],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.css',
})
export class TeamInfoComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) trainerId!: string;
  isAddPokemonVisible = false;

  constructor(private pokemonService: PokemonService) {}

  get challengedTrainerPokemons() {
    return this.pokemonService.getTrainerPokemons(this.trainerId);
  }

  onDeletePokemon(idToDelete: string) {
    this.pokemonService.removePokemon(idToDelete);
  }

  onStartAddPokemon() {
    this.isAddPokemonVisible = true;
  }

  onCloseAddPokemon() {
    this.isAddPokemonVisible = false;
  }
}
