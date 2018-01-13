import { Component } from '@angular/core';

import { TrainingService } from "./trainings/training.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TrainingService]
})
export class AppComponent {
}
