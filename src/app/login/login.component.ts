import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Accueil';
  clicConnexion = false;
  onConnect() {
  }
  constructor() { }

  ngOnInit() {
    this.clicConnexion=true;
    console.log("On se connecte ACCUEIL !");
    console.log("Valeur clicConnexion : " + this.clicConnexion);
  }

}
