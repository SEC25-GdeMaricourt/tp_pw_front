import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { regions } from '../../data/regions';
import { UsersService } from '../../services/users.service';
import { FavsService } from '../../services/fav.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User | null = null;
  favoris: Array<any> = [];
  regions = regions;
  newPassword: string = '';
  oldPassword: string = '';

  constructor(
    private usersService: UsersService,
    private favsService: FavsService
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;

    if (this.user) {
      this.favsService.getFavsByUser(this.user.id).subscribe(
        (favs: any) => {
          this.favoris = favs;
          console.log('Favorites:', this.favoris);
        },
        (error: any) => {
          console.error('Error fetching favorites:', error);
        }
      );
    }
  }

  deleteFavorite(favId: number): void {
    this.favsService.deleteFav(favId).subscribe(
      (response) => {
        console.log('Favorite deleted successfully', response);
        window.location.reload();
      },
      (error) => {
        console.error('Error deleting favorite:', error);
      }
    );
  }

  getRegionNameById(id: string): string {
    const region = this.regions.find(r => r.id === id);
    return region ? region.name : 'Unknown Region';
  }

  changePassword(): void {
    if (this.user) {
      const data = {
        email: this.user.email,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      };

      this.usersService.changePassword(data).subscribe(
        (response) => {
          console.log('Password changed successfully', response);
          alert('Password changed successfully');
          window.location.reload();
        },
        (error) => {
          console.error('Error changing password:', error);
          alert('Error changing password');
        }
      );
    }
  }
}