import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './public/login/login.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { RegisterComponent } from './public/register/register.component';
import { HomeComponent } from './auth/home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import {routes} from './routes';
import { MoviesComponent } from './auth/movies/movies.component';
import { SeriesComponent } from './auth/series/series.component';
import { UserAccountComponent } from './auth/user-account/user-account.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent,
    MoviesComponent,
    SeriesComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatStepperModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
