import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment/moment.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

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
import { RegistrationComponent } from './school/registration/registration.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";

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
    TravelsComponent,
    RegistrationComponent,
    AuthenticationComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MomentModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
