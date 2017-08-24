import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
	{ path: "", component: DisplayComponent },
	{ path: "home", component: DisplayComponent},
	{ path: "about", component: AboutComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutesModule {}