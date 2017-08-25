import { async, TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpClient } from '@angular/common/http';

import { HttpModule, Http } from '@angular/http';
import { AppComponent } from '../app.component';

import { DataService } from './data.service';



describe('DataService', () => {
  let dataService: DataService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [DataService]
    }).compileComponents();
  }));

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  describe('validateSearch', () => {
    let goodSearchTerm = "Black Bear";
    let badSearchTerm = "Black/ Bear";
    it('should validate a good search term', inject([DataService], (service: DataService) => {
    	expect(service.validateSearch(goodSearchTerm)).toBe(true);
    }));
    
    it('should NOT validate a bad search term', inject([DataService], (service: DataService) => {
      expect(service.validateSearch(badSearchTerm)).toBe(false);
    }));

  })

  describe('constructQuery', () => {
      let simpleQuery = "Black Bear";
      let simpleQueryWithExtraWhiteSpace = "Black       Bear";
      let answer = "Black+Bear"
      it('should construct a basic query string', inject([DataService], (service: DataService) => {
        expect(service.constructQuery(simpleQuery)).toEqual(answer);
      }));
      
      it('should NOT validate a bad search term', inject([DataService], (service: DataService) => {
        expect(service.constructQuery(simpleQueryWithExtraWhiteSpace)).toEqual(answer);
      }));

    })


});
