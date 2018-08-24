import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import {MoviesService} from '../services/movies.service';
import {ActivatedRoute} from '@angular/router';
import {Config} from '../../config';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  isLoading = true;
  movie: Movie;
  id: number;
  trailer: String;

  constructor(public sanitizer: DomSanitizer, private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
      // this.id = +params['id']; // (+) converts string 'id' to a number
      this.route.paramMap.subscribe(params => {
        console.log(params.get('id'));
        this.id = parseInt (params.get('id'), 10);
        this.getMovieDetails(this.id);
      });
    // });
  }


  getMovieDetails(movieId: number) {
    this.moviesService.getMovie(movieId).subscribe(
      (data: Movie) => {
        this.movie = data;
        this.trailer = Config.YOUTUBE_EMBED + this.movie.trailer;
        this.isLoading = false;
        // getScreenings?¿?¿?¿?¿
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('Finished loading movie!');
      }
    );
  }
}

