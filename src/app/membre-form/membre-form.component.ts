import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembreService } from '../membre.service'; //Service
import { Membre } from '../membre'; //Model
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-membre-form',
  templateUrl: './membre-form.component.html',
  styleUrls: ['./membre-form.component.css']
})
export class MembreFormComponent implements OnInit {

	membre:Membre;
  membreService: any;
  router: any;
  constructor(/*private route: ActivatedRoute, private router: Router, private membreService: MembreService*/) { 
  	this.membre = new Membre();
  }

  onSubmit(form : NgForm) {
    console.log(form.value);
    
    const login = form.value['login'];
    const passw = form.value['password'];
    
    
    //this.membreService.save(this.membre).subscribe(result => this.goToMembreList());
  }

  goToMembreList() {
  	this.router.navigate(['/membres']);
  }

  ngOnInit() {
  }

}
