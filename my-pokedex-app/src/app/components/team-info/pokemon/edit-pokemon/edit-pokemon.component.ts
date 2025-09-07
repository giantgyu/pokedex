import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../../../../models/pokemon.model';
import { PokemonService } from '../../../../../services/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  imports: [FormsModule],
  templateUrl: './edit-pokemon.component.html',
  styleUrl: './edit-pokemon.component.css',
})
export class EditPokemonComponent implements OnInit {
  @Input({ required: true }) pokemonId!: string;
  @Output() close = new EventEmitter();

  constructor(private pokemonService: PokemonService) {}

  pokemonToEdit!: Pokemon;
  enteredPokemon = '';
  enteredType1 = '';
  enteredType2 = '';
  enteredPokedexEntry = '';

  ngOnInit() {
    this.pokemonToEdit = this.pokemonService.getPokemonData(this.pokemonId);
    this.enteredPokemon = this.pokemonToEdit.name;
    this.enteredType1 = this.pokemonToEdit.types[0] ?? '';
    this.enteredType2 = this.pokemonToEdit.types[1] ?? '';
    this.enteredPokedexEntry = this.pokemonToEdit.pokedexEntry;
  }

  onCancelClick() {
    this.close.emit();
  }

  onSubmit() {
    this.pokemonService.editPokemonData(this.pokemonId, {
      pokemon: this.enteredPokemon,
      pokedexEntry: this.enteredPokedexEntry,
      types: [this.enteredType1, this.enteredType2],
    });
    this.close.emit();
  }
}
