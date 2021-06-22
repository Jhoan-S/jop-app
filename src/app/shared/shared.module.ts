import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { JobCardComponent } from './components/job-card/job-card.component';



@NgModule({
	declarations: [
		HeaderComponent,
		JobCardComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		HeaderComponent,
		JobCardComponent
	]
})
export class SharedModule { }
