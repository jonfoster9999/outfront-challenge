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
  selectedValue = 100;

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
    if (this.dataService.validateSearch(this.searchTerm)) {
    	this.dataService.getPictures(this.searchTerm, this.selectedValue)
    	.subscribe((data) => {
        var body = JSON.parse(data["_body"]);
        var body_data = body["data"];
    		this.dataService.updatePhotos.next(body_data);
    	}) 
    } else {
      alert("invalid search term")
    }
  }

  clear() {
    this.searchTerm = '';
    this.dataService.updatePhotos.next([])
  }

}
