import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { SitesComponent } from './area/sites/sites.component';
import { TravelsComponent } from './area/travels/travels.component';
import { WeatherComponent } from './area/weather/weather.component';
import { HousingComponent } from './area/housing/housing.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { AUTH_ROUTES } from './auth/auth.routes';

const APP_ROUTES: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'sites-de-vol', component: SitesComponent },
    { path: 'voyages', component: TravelsComponent },
    { path: 'meteo', component: WeatherComponent },
    { path: 'se-loger', component: HousingComponent },
    { path: 'calendrier', component: CalendarComponent },
    { path: 'stages', component: TrainingsComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
