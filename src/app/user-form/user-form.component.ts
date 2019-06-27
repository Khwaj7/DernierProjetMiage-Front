import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { Membre } from '../model/membre';
 
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
 
  membre: Membre;
 
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService) {
  }
 
  onSubmit() {
    this.userService.addMembre(this.membre).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/randonnees']);
  }
}
