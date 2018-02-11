import { Component, Input } from '@angular/core';

import { Training } from './training.model';
import { TrainingService } from './training.service';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class TrainingComponent {
    @Input() training: Training;

    constructor(private trainingService: TrainingService) {}

    onEdit() {
        this.trainingService.editTraining(this.training);
    }

    onDelete() {
        this.trainingService.deleteTraining(this.training)
            .subscribe(
                result => console.log(result)
            );
    }
}