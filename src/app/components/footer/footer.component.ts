import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ClickableIconComponent } from "../clickable-icon/clickable-icon.component";
import { OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  displayF: Boolean = false;

  constructor(private route: Router){
  }

  public svg_icons_names: string[] = [
    'facebook', 'twitter', 'linkedin', 'instagram', 'youtube'
  ]

  ngOnInit() {
    this.updateFooterDisplay();
    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateFooterDisplay();
    });
  }

  private updateFooterDisplay() {
    this.displayF = this.route.url === '/';
  }

}
