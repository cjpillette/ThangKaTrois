import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild, AfterViewChecked } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public counter: number;
  currentDate: moment.Moment; // for math
  monthTitle: string; // for show
  monthNumber: number; // for calculation

  @ViewChild('tableBody', {read: ElementRef}) tableBody: ElementRef;

  days: Array<string> = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.counter = moment().month();
    // initializing the month we're at as a moment for math and as a string for show (in the title)
    this.currentDate = moment();
    this.monthNumber = moment().month();
    this.monthTitle = moment().locale('fr').format('MMMM'); // i.e fevrier
  }

  ngAfterViewInit() {
    const monthArray: Array<{week: number, days: Array<number>}> = this.getMonth(this.currentDate);
    this.displayHtmlMonthTable(monthArray);
  }

  // ngAfterViewChecked() {
  //   console.log('inside ngAfterViewChecked', this.currentDate);
  // }

  getMonth(mmt: moment.Moment) {
    const monthlyCalendar = [];
    const startWeek = mmt.startOf('month').week(); // week number in the year
    const endWeek = mmt.endOf('month').week(); // week number in the year

    for (let week = startWeek; week <= endWeek; week++) {
      monthlyCalendar.push({
        week: week,
        days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
      });
    }
    return monthlyCalendar;
  }

  displayHtmlMonthTable(monthArray: Array<{week: number, days: Array<number>}>) {
    // creating all cells
    for (let i = 0; i < monthArray.length; i++) {
      // creates a table row
      const tr = this.renderer.createElement('tr');

      // 7 days of the week
      for (let j = 0; j < 7; j++) {
        // Create a <td> element and a text , make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const td = this.renderer.createElement('td');
        const momentMoment: number = monthArray[i]['days'][j];
        const momentString: string = momentMoment.toString();
        const cellText = this.renderer.createText(momentString);
        this.renderer.appendChild(td, cellText);
        this.renderer.appendChild(tr, td);
      }

      // add the row to the end of the table body
      this.renderer.appendChild(this.tableBody.nativeElement, tr);
    }
  }

    increment() {
      const nextMonth = this.currentDate.add(1, 'M');
      this.getMonth(nextMonth);
      this.currentDate = nextMonth;
    }

    decrement() {
      const lastMonth = this.currentDate.subtract(1, 'M');
      console.log('last month', lastMonth);
    }

}
