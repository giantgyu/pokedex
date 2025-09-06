import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { DUMMY_USERS } from './dummy-users';
import { TeamInfoComponent } from './components/team-info/team-info.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    TrainersComponent,
    TeamInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  trainers = DUMMY_USERS;
  title = 'my-pokedex-app';
  challengedTrainerId: string = '...';

  get challengedTrainer() {
    return this.trainers.find(
      (trainer) => trainer.id === this.challengedTrainerId
    );
  }

  onChallengeTrainer(id: string) {
    this.challengedTrainerId = id;
  }
}
