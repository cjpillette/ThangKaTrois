import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment/moment.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


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
import { AuthenticationComponent } from './auth/authentication.component';
import { routing } from './app.routing';
import { LogoutComponent } from './auth/logout.component';
import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { TrainingComponent } from './trainings/training.component';
import { TrainingListComponent } from './trainings/training-list.component';
import { TrainingInputComponent } from './trainings/training-input.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { AuthService } from './auth/auth.service';
import { MaterialModule } from './material.module';


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
    AuthenticationComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent,
    TrainingComponent,
    TrainingListComponent,
    TrainingInputComponent,
    TrainingsComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: process.env.GOOGLE_MAPS_API_KEY
    }),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MomentModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
