import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';
import {DomSanitizer} from '@angular/platform-browser';
import {MoviesService} from '../services/movies.service';
import {ActivatedRoute} from '@angular/router';
import {Config} from '../../config';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent implements OnInit {
  isLoading = true;
  movie: Movie;
  id: number;
  public genreList: Array<string> = ['Action', 'Animated', 'Comedy', 'Musical'];

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

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
        this.isLoading = false;
        // getScreenings?¿?¿?¿?¿
      },
      error => {
        console.error(error);
      },
      () => {
        console.log('Finished loading. Ready to edit movie info!');
      }
    );
  }

  submitChanges() {
    this.moviesService.updateMovie(this.movie);
  }

}
