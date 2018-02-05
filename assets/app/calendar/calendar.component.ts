import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentDate: moment.Moment; // for calculation
  monthTitle: string; // for show
  fullMonth = []; // contains all the days in moments of the month
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  constructor() { }

  ngOnInit() {
    this.currentDate = moment(); // for the content of the table
    this.monthTitle = moment().locale('fr').format('MMMM'); // for the title
    this.fullMonth = this.getMonth(this.currentDate);
  }

  getMonth(mmt: moment.Moment) {
    const monthlyCalendar = [];
    const startWeek = mmt.startOf('month').week(); // week number in the year
    const endWeek = mmt.endOf('month').week(); // week number in the year

    for (let week = startWeek; week <= endWeek; week++) {
      monthlyCalendar.push({
        week: week,
        days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('isoWeek').clone().add(n + i, 'day'))
      });
    }
    this.fullMonth = monthlyCalendar;
    console.log('monthlyCalendar', monthlyCalendar);
    return monthlyCalendar;
  }

    increment() {
      const nextMonth = this.currentDate.add(1, 'M');
      this.getMonth(nextMonth);
      this.currentDate = nextMonth;
      console.log('in increment nextMOnth', nextMonth);
    }

    decrement() {
      const lastMonth = this.currentDate.subtract(1, 'M');
      this.getMonth(lastMonth);
      this.currentDate = lastMonth;
      console.log('in decrement lastMonth', lastMonth);
    }

}
