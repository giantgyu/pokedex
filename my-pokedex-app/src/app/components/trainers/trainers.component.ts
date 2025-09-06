import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trainers',
  imports: [],
  templateUrl: './trainers.component.html',
  styleUrl: './trainers.component.css',
})
export class TrainersComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectTrainer() {}
}
