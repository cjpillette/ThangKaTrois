import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  latitude: number = 45.1614957;
  longitude: number = 2.7764246;
  constructor() { }

  ngOnInit() {
  }

}
