import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpService} from '../../common/services/http.service';
import {Movie} from '../../models/movie';
// Here we route to the server's domain
@Injectable()
export class MoviesService extends HttpService {
  private url = this.apiServicesURL;
  constructor(public http: HttpClient) {super(http); }

  getMovies(): Observable<Array<Movie>> {
    return this.get(`${this.url}/movies`);
  }

  getMovie(id: number): Observable<Movie> {
    return this.get(`${this.url}/movies/${id}`);
  }

  updateMovie(movie: Movie) {
    const id: number = movie.movieId;
    const editMovieUrl: String = this.url + '/movies/' + id + '/edit';
    // this.put(`${this.url}/movies/${id}/edit`, movie);
    this.put(editMovieUrl, movie);
  }

  addMovie(movie: Movie) {
    this.post(`${this.url}/movies/new`, movie);
  }

  removeMovie(movie: Movie) {
    this.delete(`${this.url}/movies/remove`, movie);
  }
}
