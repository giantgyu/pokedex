import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-info',
  imports: [],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.css',
})
export class TeamInfoComponent {
  @Input({ required: true }) name!: string;
}
