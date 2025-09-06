import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trainer } from '../../models/trainer.model';

@Component({
  selector: 'app-trainers',
  imports: [],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css',
})
export class TrainersComponent {
  @Input({ required: true }) trainer!: Trainer;
  @Input({ required: true }) isChallenged!: boolean;
  @Output() challengeTrainer = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.trainer.avatar;
  }

  onTrainerClick() {
    this.challengeTrainer.emit(this.trainer.id);
  }
}
