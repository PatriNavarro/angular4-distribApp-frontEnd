import {Routes} from '@angular/router';
import {LoginComponent} from './public/login/login.component';
import {RegisterComponent} from './public/register/register.component';
import {HomeComponent} from './auth/home/home.component';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {MoviesComponent} from './public/movie/movies.component';
import {SeriesComponent} from './auth/series/series.component';
import {UserAccountComponent} from './auth/user-account/user-account.component';
import {BarComponent} from './public/bar/bar.component';
import {BillboardComponent} from './public/billboard/billboard.component';
import {MovieEditorComponent} from './public/movie-editor/movie-editor.component';
import {BillboardEditorComponent} from './public/billboard-editor/billboard-editor.component';
import {MovieCreatorComponent} from './public/movie-creator/movie-creator.component';

// To route to the different client urls

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/billboard'
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
    path: 'billboard', component: BillboardComponent
  },
  {
    path: 'billboard/edit', component: BillboardEditorComponent
  },
  {
    path: 'movie/:id' , component: MoviesComponent
  },
  {
    path: 'billboard/new-movie' , component: MovieCreatorComponent
  },
  {
    path: 'movie/:id/edit' , component: MovieEditorComponent
  },
  {
    path: 'series', component: SeriesComponent
  },
  {
    path: 'account', component: UserAccountComponent
  },
  {
    path: 'bar', component: BarComponent
  },
  {
    path: '*', component: NotFoundComponent
  }
];
