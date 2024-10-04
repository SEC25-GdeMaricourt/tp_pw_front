import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle = '';
  
  constructor(
    private router: Router
  ){
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