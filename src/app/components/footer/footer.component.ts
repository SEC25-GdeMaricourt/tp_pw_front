import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ClickableIconComponent } from "../clickable-icon/clickable-icon.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public svg_icons_names: string[] = [
    'facebook','twitter','linkedin','instagram','youtube'
  ]
}
