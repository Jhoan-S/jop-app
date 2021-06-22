import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,

		PagesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
