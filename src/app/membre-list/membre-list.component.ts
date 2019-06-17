import { Component, OnInit } from '@angular/core';
import { Membre } from '../membre'; //model

@Component({
	selector: 'app-membre-list',
	templateUrl: './membre-list.component.html',
	styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit {
	membres : Membre[];
	constructor() { }

	ngOnInit() {
		
	}

}
