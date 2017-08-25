import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

import { DataService } from './services/data.service';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './about/about.component';
import { AppRoutesModule } from './app.routes';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    DisplayComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    AppRoutesModule
  ],
  providers: [
  	DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
