import { Component, OnInit } from '@angular/core';
import { Membre } from '../model/membre'; //model
import { RandoServiceService } from '../service/rando-service.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { tap, switchMap, elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-rando-list',
  templateUrl: './rando-list.component.html',
  styleUrls: ['./rando-list.component.css']
})
export class RandoListComponent implements OnInit {
  private randonnees = [];
  
	constructor(private randoService: RandoServiceService) { }
  
  ngOnInit() {
    console.log("test")
    this.randonnees = [];
    this.randoService.getRandonnees().subscribe( res => {
      res.forEach(element => {
				console.log(element);
				this.randonnees.push(element);
			});
    });
  }
  
  voter() {
  }
  
}
