import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel.model';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule, 
    MatChipsModule
  ],
  templateUrl: './hotel-detail.html',
  styleUrl: './hotel-detail.css'
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel | undefined;
  rooms: Room[] = [];
  
  // ADDED THESE 2 VARIABLES TO FIX THE ERRORS
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      // 1. Get Hotel Details with Error Handling
      this.hotelService.getHotelById(id).subscribe({
        next: (data: Hotel) => {
          this.hotel = data;
          this.isLoading = false; // Stop loading on success
        },
        error: (err) => {
          console.error('Error fetching hotel:', err);
          this.errorMessage = 'Could not load hotel details. Please try again.';
          this.isLoading = false; // Stop loading on error
        }
      });

      // 2. Get Available Rooms
      this.hotelService.getRoomsByHotelId(id).subscribe({
        next: (data: Room[]) => {
          this.rooms = data;
        },
        error: (err) => console.error('Error fetching rooms:', err)
      });
    } else {
      this.errorMessage = 'Invalid Hotel ID';
      this.isLoading = false;
    }
  }
}