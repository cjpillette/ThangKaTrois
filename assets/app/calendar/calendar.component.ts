import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentDate: moment.Moment;
  monthTitle: string; // for reading the title
  monthNumber: number; // for calculation
  fullMonth = []; // contains all the days in moments of the month
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  constructor() { }

  ngOnInit() {
    this.currentDate = moment(); // for the content of the table
    this.monthTitle = moment().locale('fr').format('MMMM'); // for the title
    this.fullMonth = this.getMonth(this.currentDate);
    this.monthNumber = moment().month();
  }

  getMonth(mmt: moment.Moment) {
    const monthlyCalendar = [];
    const startWeek = mmt.startOf('month').isoWeek(); // week number in the year starting on MON
    const endWeek = mmt.endOf('month').isoWeek();
    const year = mmt.year();


    for (let week = startWeek; week <= endWeek; week++) {
      monthlyCalendar.push({
        days: Array(7).fill(0).map((n, i) => moment().week(week).set('year', year).startOf('isoWeek').clone().add(n + i, 'day'))
      });
    }
    this.fullMonth = monthlyCalendar;
    return monthlyCalendar;
  }

    increment() {
      const nextMonth = this.currentDate.add(1, 'M');
      this.getMonth(nextMonth);
      this.currentDate = nextMonth;
      this.monthTitle = nextMonth.locale('fr').format('MMMM');
      this.monthNumber = nextMonth.month();
    }

    decrement() {
      const lastMonth = this.currentDate.subtract(1, 'M');
      this.getMonth(lastMonth);
      this.currentDate = lastMonth;
      this.monthTitle = lastMonth.locale('fr').format('MMMM');
      this.monthNumber = lastMonth.month();
    }

}
