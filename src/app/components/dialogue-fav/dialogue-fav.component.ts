import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FavsService } from '../../services/fav.service';

@Component({
  selector: 'dialogue-fav',
  templateUrl: './dialogue-fav.component.html',
  styleUrls: ['./dialogue-fav.component.scss']
})
export class DialogueFavComponent {
  data = inject(MAT_DIALOG_DATA);
  favsService = inject(FavsService);
  dialogRef = inject(MatDialogRef);
  id_user: number | null = JSON.parse(localStorage.getItem('user') || '{}').id || null;
  isConnected:boolean = this.id_user !== null;

  constructor() {}

  onConfirm(): void {
    this.favsService.createFav({ id_region: this.data.event.id_region, id_user: this.id_user }).subscribe(
      response => {
        console.log('Favorite created successfully', response);
        this.dialogRef.close(true);
        window.location.reload();
      },
      error => {
        if (error.status === 409) {
          console.error('Favorite already exists', error);
          alert('This favorite already exists.');
        } else {
          console.error('Error creating favorite', error);
          alert('An error occurred while creating the favorite.');
        }
      }
    );
  }
}