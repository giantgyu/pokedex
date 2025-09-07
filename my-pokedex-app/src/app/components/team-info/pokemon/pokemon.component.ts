import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../models/pokemon.model';
import { LowerCasePipe } from '@angular/common';
import { CardComponent } from '../../../shared/card/card.component';
import { PokemonService } from '../../../../services/pokemon.service';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

@Component({
  selector: 'app-pokemon',
  imports: [LowerCasePipe, CardComponent, EditPokemonComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  @Input({ required: true }) pokemon!: Pokemon;
  isEditPokemonVisible = false;
  constructor(private pokemonService: PokemonService) {}

  onDeleteClick() {
    if (confirm('Are you sure broooo?')) {
      this.pokemonService.removePokemon(this.pokemon.id);
    }
  }
  onEditClick() {
    this.showEditPokemon();
  }

  showEditPokemon() {
    this.isEditPokemonVisible = true;
  }

  closeEditPokemon() {
    this.isEditPokemonVisible = false;
  }
}
