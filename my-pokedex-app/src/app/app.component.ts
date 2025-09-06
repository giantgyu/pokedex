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

  onChallengeTrainer(name: string) {
    alert(`You challenged Gym Leader ${name}!`);
  }
}
