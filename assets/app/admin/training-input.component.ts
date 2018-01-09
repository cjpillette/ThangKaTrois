import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";


import { Training } from "./training.model";
import { TrainingService } from "./training.service";

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
            this.trainingService.updateTraining(this.training)
                .subscribe(
                    result => console.log(result)
                );
            this.training = null;
        } else {
            // Create
            const training = new Training(form.value.content, 'Max');
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
