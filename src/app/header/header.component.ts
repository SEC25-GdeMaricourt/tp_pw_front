import { Component } from '@angular/core';
import { IconButton } from '../models/icon.interface';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconButtonComponent, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public iconButtons: IconButton[]

  constructor() {
    this.iconButtons = [
      {
        icon: 'wb_sunny',
        nom: 'PREVISIONS'
      },
      {
        icon: 'water',
        nom: 'METEO MARINE'
      },
      {
        icon: 'landscape',
        nom: 'METEO MONTAGNE'
      },
      {
        icon: 'public',
        nom: 'CLIMAT'
      },
      {
        icon: 'newspaper',
        nom: 'ACTUS & DOSSIERS'
      },
      {
        icon: 'person_add',
        nom: 'NOS SERVICES'
      }
    ];
  }
}
