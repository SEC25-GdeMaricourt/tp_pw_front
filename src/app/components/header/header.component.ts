import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogueFavComponent } from '../dialogue-fav/dialogue-fav.component';
import { FavsService } from '../../services/fav.service';
import { regions } from '../../data/regions';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dialog = inject(MatDialog);
  user: User | null = null;
  username: string = '';
  favoris: Array<any> = [];
  regions = regions;
  filteredRegions = regions;
  searchForm: FormGroup;

  constructor(
    private router: Router,
    private favsService: FavsService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
    this.username = this.user ? this.user.name : '';

    if (this.user) {
      this.favsService.getFavsByUser(this.user.id).subscribe(
        (favs: any) => {
          this.favoris = favs;
        },
        (error: any) => {
          console.error('Error fetching favorites:', error);
        }
      );
    }

    this.searchForm.get('search')?.valueChanges.subscribe(value => {
      this.filterRegions(value);
    });
  }

  filterRegions(searchTerm: string): void {
    this.filteredRegions = this.regions.filter(region =>
      region.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getRegionNameById(id: string): string {
    const region = this.regions.find(r => r.id === id);
    return region ? region.name : 'Unknown Region';
  }

  openFavDialog(regionId: string): void {
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

  signup() {
    this.router.navigateByUrl('/signup');
  }

  signin() {
    this.router.navigateByUrl('/signin');
  }

  logout() {
    localStorage.removeItem('isConnected');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }

  userSettings() {
    this.router.navigateByUrl('/user');
  }

  home() {
    this.router.navigateByUrl('/');
  }
}