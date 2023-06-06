import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json')
  }
}
