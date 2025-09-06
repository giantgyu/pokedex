import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-pokemon',
  imports: [FormsModule],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.css',
})
export class AddPokemonComponent {
  @Output() cancel = new EventEmitter<void>();
  enteredPokemon = '';
  enteredPokedexEntry = '';
  enteredType1 = '';
  enteredType2 = '';

  onCancelClick() {
    this.cancel.emit();
  }
}
