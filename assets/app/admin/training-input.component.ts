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
        level: new FormControl(null, Validators.required),
        startDate: new FormControl(null, Validators.required),
        endDate: new FormControl(null, Validators.required),
        maxNumberOfParticipants: new FormControl(null, Validators.required)
      });
      this.trainingService.trainingIsEdit.subscribe(
          (training: Training) => this.training = training
      );
    }

    onSubmit() {
      if (this.training) {
          // Edit
          this.training.content = this.trainingForm.value.content;
          this.trainingService.updateTraining(this.training)
              .subscribe(
                training => console.log(result)
              );
          this.training = null;
      } else {
          // Create
          const training = new Training(this.trainingForm.value.content, 'Max');
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
