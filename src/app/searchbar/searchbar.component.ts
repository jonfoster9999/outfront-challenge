import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Http} from '@angular/http';
import { Router, NavigationEnd } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

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
              private route: Router,
              private flashMessager: FlashMessagesService
          ) { }

  ngOnInit() {
    this.route.events
      .subscribe((data) => {
        if(data instanceof NavigationEnd) {
          if (data['url'] !== '/about') {
            this.showSearch = true;
          } else {
            this.showSearch = false;
            //hide the error message if you switch quickly to the about page
            this.dataService.clearErrors();
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
      this.dataService.clearErrors();
      this.flashMessager.show("Enter a valid search term", {cssClass: 'alert-danger flasher'})
    }
  }

  clear() {
    this.searchTerm = '';
    this.dataService.clearErrors();
    this.dataService.updatePhotos.next([])
  }

}
