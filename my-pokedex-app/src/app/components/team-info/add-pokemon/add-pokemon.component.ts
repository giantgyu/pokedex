import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewPokemonData } from '../../../models/new-pokemon.model';

@Component({
  selector: 'app-add-pokemon',
  imports: [FormsModule],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.css',
})
export class AddPokemonComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewPokemonData>();

  enteredPokemon = '';
  enteredPokedexEntry = '';
  enteredType1 = '';
  enteredType2 = '';

  onCancelClick() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      pokemon: this.enteredPokemon,
      types: [this.enteredType1, this.enteredType2],
      pokedexEntry: this.enteredPokedexEntry,
    });
  }
}
