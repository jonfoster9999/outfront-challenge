import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  
  apiUrl: String = "http://api.giphy.com/v1/gifs/search?q=<search_query>&api_key=dc6zaTOxFJmzC"
  photoArray = [];

  prepareSearchUrl(searchTerm) {
  	var apiArr = this.apiUrl.split("<search_query>");
  	return apiArr[0] + searchTerm + apiArr[1];
  }

  constructor(private http: Http) { }

  getPictures(searchTerm) {
  	return this.http.get("http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=100")
  }

  updatePhotos = new Subject();

}
