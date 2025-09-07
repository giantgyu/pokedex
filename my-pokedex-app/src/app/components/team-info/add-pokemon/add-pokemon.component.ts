import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../../../services/pokemon.service';

@Component({
  selector: 'app-add-pokemon',
  imports: [FormsModule],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.css',
})
export class AddPokemonComponent {
  @Input({ required: true }) trainerId!: string;
  @Output() close = new EventEmitter<void>();

  constructor(private pokemonService: PokemonService) {}

  enteredPokemon = '';
  enteredPokedexEntry = '';
  enteredType1 = '';
  enteredType2 = '';

  onCancelClick() {
    this.close.emit();
  }

  onSubmit() {
    this.pokemonService.addPokemon(
      {
        pokemon: this.enteredPokemon,
        types: [this.enteredType1, this.enteredType2],
        pokedexEntry: this.enteredPokedexEntry,
      },
      this.trainerId
    );
    this.close.emit();
  }
}
