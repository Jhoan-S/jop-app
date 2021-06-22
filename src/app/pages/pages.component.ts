import { Component, OnInit } from '@angular/core';
import { Job } from '@models/Job';
import { JobService } from '@services/job.service';

@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

	jobs: Job[];

	constructor( private jobService: JobService ) {
		this.jobs = this.jobService.getJobs();
	}

	ngOnInit(): void { }

}
