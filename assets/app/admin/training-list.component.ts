import { Component, OnInit } from "@angular/core";

import { Training } from "./training.model";
import { TrainingService } from "./training.service";

@Component({
    selector: 'app-training-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-training
                   [training]="training"
                    *ngFor="let training of trainings"></app-training>
        </div>
    `
})
export class TrainingListComponent implements OnInit {
    trainings: Training[];

    constructor(private trainingService: TrainingService) {}

    ngOnInit() {
        this.trainingService.getTrainings()
            .subscribe(
                (trainings: Training[]) => {
                    this.trainings = trainings;
                }
            );
    }
}
