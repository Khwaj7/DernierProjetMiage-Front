import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Membre } from '../membre'; //Model
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RestService } from '../rest.service';

@Component({
  selector: 'app-membre-form',
  templateUrl: './membre-form.component.html',
  styleUrls: ['./membre-form.component.css']
})
export class MembreFormComponent implements OnInit {
  utilisateurConnecte:number;
  utilisateur:Membre=null;
  membre:Membre
  membres:Membre[] = [];
  router: any;
  constructor(private route: ActivatedRoute, router: Router, public rest:RestService) { 
    this.membre = new Membre("","");
    //this.rest.getMembres();
  }
  
  onSubmit(form : NgForm) {
    console.log(form.value);
    
    const login = form.value['login'];
    const passw = form.value['password'];
    this.membre.username = login;
    this.membre.password = passw;

    for(let unMembre of this.membres){
      console.log("utilisateur courant : login : " + unMembre.username);
      if(login == unMembre.username){
        if(passw == unMembre.password){
          this.utilisateur = unMembre;
          this.connectOk();
        } else this.utilisateurConnecte = 0;
      } else this.utilisateurConnecte = 0;
    }
    console.log("connecté ? " + this.utilisateurConnecte);
    if(this.utilisateurConnecte != 1){
      this.connectNOk();
    }
    //this.membreService.save(this.membre).subscribe(result => this.goToMembreList());
  }
  
  goToMembreList() {
    this.router.navigate(['/membres']);
  }
  
  ngOnInit() {
    //this.rest.getMembres();
    this.getMembres();
  }
  
  getMembres(){
    console.log("get membres ! ");
    this.membres.push(new Membre("user", "pwd"));
    /*this.rest.getMembres().subscribe((data: {}) => {
      console.log(data);
      this.membres = data;
    });*/    
  }
  connectOk(){
    console.log("unMembre trouvé à la soumission");
    this.utilisateurConnecte = 1;

    
  }
  connectNOk(){
    console.log("membre introuvable à la soumission");
  }
  
}
