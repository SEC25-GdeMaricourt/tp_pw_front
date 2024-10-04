import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconButtonComponent } from './icon-button/icon-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'amo_guigui_tpnote_front';
  public items: string[]

  constructor() {
    this.items = ["PREVISIONS", "METEO MARINE", "METEO MONTAGNE", "CLIMAT", "ACTUS & DOSSIERS", "NOS SERVICES"];
  }
}
