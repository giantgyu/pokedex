import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  imports: [],
  templateUrl: './add-pokemon.component.html',
  styleUrl: './add-pokemon.component.css',
})
export class AddPokemonComponent {
  @Output() cancel = new EventEmitter<void>();

  onCancelClick() {
    this.cancel.emit();
  }
}
