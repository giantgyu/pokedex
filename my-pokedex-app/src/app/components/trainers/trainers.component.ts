import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-trainers',
  imports: [],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css',
})
export class TrainersComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() challengeTrainer = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onTrainerClick() {
    this.challengeTrainer.emit(this.id);
  }
}
