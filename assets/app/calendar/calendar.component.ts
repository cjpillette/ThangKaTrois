import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild('tableBody', {read: ElementRef}) tableBody: ElementRef;

  // for the header
  currentMonth: String = moment().format('MMMM');

  // for subheader
  days: Array<string> = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit() {
    const monthArray: Array<any> = this.getMonth('1')
    this.displayHtmlMonthTable(monthArray);
}

  // getMonth argument is a string with number starting
  // at 1 ending witih 12, ie. january shd be '1', february '2', dec '12'
  getMonth(month: string){
    let currentMonth = moment(month, "MM")
    let monthlyCalendar = []
    const startWeek = currentMonth.startOf('month').week();
    const endWeek = currentMonth.endOf('month').week();

    for(var week = startWeek; week<=endWeek;week++){
      monthlyCalendar.push({
        week:week,
        days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('isoWeek').clone().add(n + i, 'day'))
      })
    }
    return monthlyCalendar;
  }

  displayHtmlMonthTable(monthArray: Array<{week: number, days:Array<number>}>){
    // creating all cells
    for (let i = 0; i < monthArray.length; i++) {
      // creates a table row
      let tr = this.renderer.createElement("tr");

      // 7 days of the week
      for (let j = 0; j < 7; j++) {
        // Create a <td> element and a text , make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        let td = this.renderer.createElement("td");
        let momentMoment: number = monthArray[i]['days'][j];
        let momentString: string = momentMoment.toString();
        let cellText = this.renderer.createText(momentString);
        this.renderer.appendChild(td, cellText);
        this.renderer.appendChild(tr, td);
      }

      // add the row to the end of the table body
      this.renderer.appendChild(this.tableBody.nativeElement, tr);
    }
  }

}
