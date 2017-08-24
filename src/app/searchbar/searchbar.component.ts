import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Http } from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';

declare var $ :any;

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  showSearch: Boolean = true;
  searchTerm: String = '';

  constructor(private dataService: DataService, 
              private http: Http,
              private route: Router
          ) { }

  ngOnInit() {
    this.route.events
      .subscribe((data) => {
        if(data instanceof NavigationEnd) {
          if (data['url'] !== '/about') {
            this.showSearch = true;
          } else {
            this.showSearch = false;
          }
        }
      })
  }

  searchGiphy() {
  	this.dataService.getPictures(this.searchTerm)
  	.subscribe((data) => {
      var body = JSON.parse(data["_body"]);
      var body_data = body["data"];
  		this.dataService.updatePhotos.next(body_data);
  	})
  }

  clear() {
    this.searchTerm = '';
    this.dataService.updatePhotos.next([])
  }

}
