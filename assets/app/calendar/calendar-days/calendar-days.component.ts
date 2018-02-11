import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-days',
  templateUrl: './calendar-days.component.html',
  styleUrls: ['./calendar-days.component.css']
})
export class CalendarDaysComponent implements OnInit {
  @Input() fullMonth: Array<any>;
  @Input() monthNumber: number;
  @Input() days: Array<string>;
  @Output() selectedDay: EventEmitter<any> = new EventEmitter();

  stage1 = [
    '2018-02-12',
    '2018-02-13',
    '2018-02-14',
    '2018-02-15',
    '2018-02-16',
    '2018-02-17'
  ];

  constructor() {
   }

  ngOnInit() {
  }

  whichDay(day) {
    this.selectedDay.emit(day);
  }

}
