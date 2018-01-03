import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { TandemComponent } from './tandem/tandem.component';
import { ShopComponent } from './shop/shop.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SchoolComponent } from './school/school.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AreaComponent } from './area/area.component';
import { HousingComponent } from './area/housing/housing.component';
import { WeatherComponent } from './area/weather/weather.component';
import { SitesComponent } from './area/sites/sites.component';
import { TravelsComponent } from './area/travels/travels.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkshopComponent,
    TandemComponent,
    ShopComponent,
    CalendarComponent,
    SchoolComponent,
    TeamComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    AreaComponent,
    HousingComponent,
    WeatherComponent,
    SitesComponent,
    TravelsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
