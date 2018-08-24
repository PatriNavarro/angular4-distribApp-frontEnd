import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import {MoviesService} from '../services/movies.service';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {MovieDetails} from '../../models/movieDetails';

@Component({
  selector: 'app-movie-creator',
  templateUrl: './movie-creator.component.html',
  styleUrls: ['./movie-creator.component.css']
})
export class MovieCreatorComponent implements OnInit {
  isLoading = true;
  movie: Movie;
  movieDetails: MovieDetails;
  id: number;
  public genreList: Array<string> = ['Action', 'Animated', 'Comedy', 'Musical'];

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.movie = new Movie();
    this.movieDetails = new MovieDetails();
    console.log('Movie Creator initialized');
    this.isLoading = false;
  }

  onSubmit(form: NgForm) {
    this.movie.movieDetails = this.movieDetails;
    console.log('Movie being saved:' + this.movie);
    console.log('Form value:' + form.value);
    this.moviesService.addMovie(this.movie);
  }

}
