import { Component } from "@angular/core";

@Component({
    selector: 'app-trainings',
    template: `
        <div class="row">
            <app-training-input></app-training-input>
        </div>
        <hr>
        <div class="row">
            <app-training-list></app-training-list>
        </div>
    `
})
export class TrainingsComponent {

}