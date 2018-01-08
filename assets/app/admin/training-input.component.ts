import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Training } from "./training.model";
import { TrainingService } from "./training.service";

@Component({
    selector: 'app-training-input',
    templateUrl: './training-input.component.html'
})
export class TrainingInputComponent implements OnInit {
    trainingForm: FormGroup;
    training: Training;

    constructor(private trainingService: TrainingService) {}

    ngOnInit() {
      this.trainingForm = new FormGroup({
        level: new FormControl(this.training ? this.training.level : null, Validators.required),
        startDate: new FormControl(this.training ? this.training.startDate : null, Validators.required),
        endDate: new FormControl(this.training ? this.training.endDate : null, Validators.required),
        maxNumberOfParticipants: new FormControl(this.training? this.training.maxNumberOfParticipants : null, Validators.required)
      });
      this.trainingService.trainingIsEdit.subscribe(
          (training: Training) => this.training = training
      );
    }

    onSubmit() {
      if (this.training) {
          // Edit
          this.training.level = this.trainingForm.value.level;
          this.trainingService.updateTraining(this.training)
              .subscribe(
                training => console.log(training)
              );
          this.training = null;
      } else {
          // Create
          const training = new Training(this.trainingForm.value.level, new Date(), new Date(), 7, null);
          this.trainingService.addTraining(training)
              .subscribe(
                  data => console.log(data),
                  error => console.error(error)
              );
      }
        this.trainingForm.reset();
    }

    onClear() {
      this.training = null;
      this.trainingForm.reset();
    }
}
