import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconButton } from './models/icon.interface';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'amo_guigui_tpnote_front';
}
