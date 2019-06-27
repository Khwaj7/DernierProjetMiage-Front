import { Component, OnInit } from '@angular/core';
import { Membre } from '../model/membre'; //model
import { UserServiceService } from "../service/user-service.service";
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { tap, switchMap, elementAt } from 'rxjs/operators';

@Component({
	selector: 'app-membre-list',
	templateUrl: './membre-list.component.html',
	styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit {
	private membres: Membre[];
	private teamLeaders: Membre[];
	private formulaire: FormControl;
	constructor(private userService: UserServiceService) { }
	
	ngOnInit() {
		this.membres = [];
		this.teamLeaders = [];
		this.formulaire = new FormControl();
		this.userService.getTeamLeaders().subscribe( res => {
			res.forEach(element => {
				console.log(element);
				this.teamLeaders.push(element);
			});
		});
		this.userService.getMembres().subscribe( res => {
			res.forEach(element => {
				this.membres.push(element);
				console.log(element);
				this.teamLeaders.forEach(unTL => {
					if(element.login == unTL.login)
					{
						element.isTeamLeader = true;
						console.log("isTeamLeader : "  + element.isTeamLeader);
					}
					else {
						element.isTeamLeader = false;
						console.log("isTeamLeader : "  + element.isTeamLeader);
					}
				});
			});
		});
	}
	
	promote(unMembre:Membre) {
		console.log(unMembre.id);
		this.userService.promote(unMembre.id).subscribe(res => {
			console.log(res);
		});
	}
}
