import {Routes} from '@angular/router';
import {LoginComponent} from './public/login/login.component';
import {RegisterComponent} from './public/register/register.component';
import {HomeComponent} from './auth/home/home.component';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {MoviesComponent} from './auth/movies/movies.component';
import {SeriesComponent} from './auth/series/series.component';
import {UserAccountComponent} from './auth/user-account/user-account.component';


export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'movies', component: MoviesComponent
  },
  {
    path: 'series', component: SeriesComponent
  },
  {
    path: 'account', component: UserAccountComponent
  },
  {
    path: '*', component: NotFoundComponent
  }
];
