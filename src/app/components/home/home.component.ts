import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogueFavComponent } from '../dialogue-fav/dialogue-fav.component';
import { regions } from '../../data/regions';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User | null = null;
  dialog = inject(MatDialog);

  regions = regions;

  constructor( ) { }

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart', 'geochart'] });
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Lieu', 'Température'],
      ...this.regions.map(region => [region.name, region.temperature])
    ]);

    const options = {
      region: 'FR',
      displayMode: 'regions',
      resolution: 'provinces',
      backgroundColor: '#81d4fa',
      colorAxis: { colors: ['#054678', '#417DD2', '#3F7CD4', '#FFD376', '#DA7942', '#AF1301'] }
    };

    const chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    google.visualization.events.addListener(chart, 'regionClick', this.onRegionClick.bind(this));
  }

  onRegionClick(event: any) {
    const regionId = event.region;
    const region = this.regions.find(r => r.id === regionId);
    const regionName = region ? region.name : 'Unknown Region';
    console.log('Region clicked:', regionName);
    this.dialog.open(DialogueFavComponent, {
      data: {
        event: { 
          id_region: regionId,
          region: regionName
         }
      }
    });
  }
}