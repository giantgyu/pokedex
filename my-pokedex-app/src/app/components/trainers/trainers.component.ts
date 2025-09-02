import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-trainers',
  imports: [],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css',
})
export class TrainersComponent {
  selectedTrainer = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];

  get imagePath() {
    return 'assets/users/' + this.selectedTrainer.avatar;
  }

  onSelectTrainer() {
    alert('Select Trainer');
  }
}
