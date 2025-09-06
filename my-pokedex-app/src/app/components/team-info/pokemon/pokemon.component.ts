import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../../models/pokemon.model';
import { LowerCasePipe } from '@angular/common';
import { CardComponent } from '../../../shared/card/card.component';

@Component({
  selector: 'app-pokemon',
  imports: [LowerCasePipe, CardComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  @Input({ required: true }) pokemon!: Pokemon;
  @Output() delete = new EventEmitter<string>();

  onDeleteClick() {
    this.delete.emit(this.pokemon.id);
  }
}
