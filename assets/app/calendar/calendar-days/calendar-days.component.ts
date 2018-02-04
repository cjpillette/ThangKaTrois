import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calendar-days',
  templateUrl: './calendar-days.component.html',
  styleUrls: ['./calendar-days.component.css']
})
export class CalendarDaysComponent implements OnInit {
  @Input() fullMonth: Array<any>;

  constructor() {
   }

  ngOnInit() {
    console.log('this.fullMonth in the child[0].days', this.fullMonth[0].days);
  }

}
