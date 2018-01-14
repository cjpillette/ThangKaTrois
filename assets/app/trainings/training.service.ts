import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Training } from "./training.model";

@Injectable()
export class TrainingService {
    private trainings: Training[] = [];
    trainingIsEdit = new EventEmitter<Training>();

    constructor(private http: Http) {}

    addTraining(training: Training) {
        const body = JSON.stringify(training);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') 
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.post('http://localhost:3000/training' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const training = new Training(result.obj.content, result.obj.startDate, result.obj.endDate, result.obj.maxParticipants, 'Dummy', result.obj._id, null);
                this.trainings.push(training);
                return training;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getTrainings() {
        return this.http.get('http://localhost:3000/training')
            .map((response: Response) => {
                const trainings = response.json().obj;
                let transformedTrainings: Training[] = [];
                for (let training of trainings) {
                    transformedTrainings.push(new Training(training.content, training.startDate, training.endDate, training.maxParticipants, 'Dummy', training._id, null));
                }
                this.trainings = transformedTrainings;
                return transformedTrainings;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    editTraining(training: Training) {
        this.trainingIsEdit.emit(training);
    }

    updateTraining(training: Training) {
        const body = JSON.stringify(training);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') 
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.patch('http://localhost:3000/training/' + training.trainingId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteTraining(training: Training) {
        this.trainings.splice(this.trainings.indexOf(training), 1);
        const token = localStorage.getItem('token') 
        ? '?token=' + localStorage.getItem('token')
        : '';
        return this.http.delete('http://localhost:3000/training/' + training.trainingId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}