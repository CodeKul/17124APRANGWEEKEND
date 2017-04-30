import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JokeService {

  constructor(
    private http: Http
  ) { }

  randomJoke(onJoke): void {
    this.http.get('http://api.icndb.com/jokes/random').subscribe(res => {
      console.log(res.json().value.joke);
      onJoke(res.json().value.joke);
      this.postJoke(res.json().value.joke);
    }, this.httpError);
  }

  postJoke(joke: string, onPost?: any) {
    this.http.post('https://digital-shelter-153912.firebaseio.com/joke.json', { joke: joke }).subscribe(res => {
      onPost();
    }, this.httpError);
  }

  httpError = err => {
    console.log(err);
  };
}
