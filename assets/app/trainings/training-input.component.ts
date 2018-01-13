import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { TrainingService } from "./training.service";
import { Training } from "./training.model";

@Component({
    selector: 'app-training-input',
    templateUrl: './training-input.component.html'
})
export class TrainingInputComponent implements OnInit {
    training: Training;

    constructor(private trainingService: TrainingService) {}

    onSubmit(form: NgForm) {
        if (this.training) {
            // Edit
            this.training.content = form.value.content;
            this.training.startDate = form.value.startDate;
            this.training.endDate = form.value.endDate;
            this.training.maxParticipants = form.value.maxParticipants;
            this.trainingService.updateTraining(this.training)
                .subscribe(
                    result => console.log(result)
                );
            this.training = null;
        } else {
            // Create
            const training = new Training(form.value.content, form.value.startDate, form.value.endDate, form.value.maxParticipants, 'Max');
            this.trainingService.addTraining(training)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.training = null;
        form.resetForm();
    }

    ngOnInit() {
        this.trainingService.trainingIsEdit.subscribe(
            (training: Training) => this.training = training
        );
    }
}