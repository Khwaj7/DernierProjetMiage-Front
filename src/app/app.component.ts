import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  clicConnexion = false;
  onConnect() {
    this.clicConnexion=true;
    console.log("On se connecte !");
    console.log("Valeur clicConnexion : " + this.clicConnexion);
  }
}
