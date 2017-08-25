import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  
  searchString1 = "http://api.giphy.com/v1/gifs/search?q="
  searchString2 = "&api_key=dc6zaTOxFJmzC&limit="
  photoArray = [];


  constructor(private http: Http) { }

  validateSearch(term) {
    return /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/.test(term);
  }

  constructQuery(term) {
    term = term.replace(/  +/g, ' ');
    return term.split(" ").join("+");
  }

  getPictures(searchTerm, number) {
    searchTerm = this.constructQuery(searchTerm);
    console.log(searchTerm);
  	return this.http.get(this.searchString1 + searchTerm + this.searchString2 + number)
  }

  updatePhotos = new Subject();

}
