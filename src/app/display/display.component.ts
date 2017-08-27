import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  photoSet: {} = [];

  //for pagination
  p: number = 1;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  	this.dataService.updatePhotos
  		.subscribe((data) => {
  			this.photoSet = data;
        console.log(this.photoSet)
  		})
  }

  createOverlay(photo) {
  	var img = document.createElement('img');
  	img.setAttribute('src', photo['images']['original']['url']);
  	img.setAttribute('class', "overlay-pic");
  	console.log(img)
  	var overlay = document.getElementById('overlay');
  	overlay.appendChild(img);
 	  overlay.style.display = 'flex';

    //click listener to dismiss overlay
 	  overlay.addEventListener('click', function(){
 		  overlay.style.display = 'none'
 		  overlay.innerHTML = '';
 	  }, false)
  }
}
