import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //standalone: true,
  //imports: [RouterOutlet]
})
export class AppComponent {
  pageTitle = '';
  public items: string[]
  
  constructor(
    private router: Router
  ){
    this.items = ["PREVISIONS", "METEO MARINE", "METEO MONTAGNE", "CLIMAT", "ACTUS & DOSSIERS", "NOS SERVICES"];
  }

  changePageHeader(){
    switch (this.router.url) {
      case '/login':
        this.pageTitle = 'Connexion';
        break;
      case '/signup':
        this.pageTitle = 'S\'inscrire';
        break;
    
      default:
        this.pageTitle = 'Météo';
        break;
    }
  }
}