import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  
  searchString1 = "https://api.giphy.com/v1/gifs/search?q=";
  searchString2 = "&api_key=dc6zaTOxFJmzC&limit=";

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
  	return this.http.get(this.searchString1 + searchTerm + this.searchString2 + number);
  }

  clearErrors() {
    var els = <HTMLCollection>document.querySelectorAll('.alert-danger');
    if (els) {
      for(var i = 0, n = els.length; i < n; i++) {
        var el = <HTMLElement>els[i];
        el.style.display = 'none';
      }
    }
  }

  updatePhotos = new Subject();

}
