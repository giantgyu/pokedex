import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Trainer {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-trainers',
  imports: [],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css',
})
export class TrainersComponent {
  @Input({ required: true }) trainer!: Trainer;
  @Output() challengeTrainer = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.trainer.avatar;
  }

  onTrainerClick() {
    this.challengeTrainer.emit(this.trainer.id);
  }
}
