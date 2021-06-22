import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing';

// Components
import { PagesComponent } from './pages.component';



@NgModule({
	declarations: [
		PagesComponent
	],
	imports: [
		RouterModule,
		CommonModule,

		SharedModule,
		PagesRoutingModule
	]
})
export class PagesModule { }
