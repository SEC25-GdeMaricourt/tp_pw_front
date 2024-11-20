import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clickable-icon',
  templateUrl: './clickable-icon.component.html',
  styleUrls: ['./clickable-icon.component.scss']
})
export class ClickableIconComponent implements OnChanges {
  @Input() svg_icon_name: string='';
  @Input() redirect_path: string='';
  public icon_src_path: string='';
  
  ngOnChanges(): void {
    this.icon_src_path = `assets/icons/${this.svg_icon_name}.svg`;
  }
}