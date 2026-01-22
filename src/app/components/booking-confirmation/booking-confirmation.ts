import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HotelService } from '../../services/hotel.service';
import { Booking } from '../../models/booking.model';
import { Room } from '../../models/room.model';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-booking-confirmation',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './booking-confirmation.html',
  styleUrl: './booking-confirmation.css'
})
export class BookingConfirmationComponent implements OnInit {
  booking: Booking | undefined;
  room: Room | undefined;
  hotel: Hotel | undefined;
  
  isLoading = true;
  errorMessage = ''; // New variable for error messages
  assignedRoomNumber: number = 0;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    const bookingId = Number(this.route.snapshot.paramMap.get('id'));
    this.assignedRoomNumber = Math.floor(Math.random() * 500) + 100;

    if (bookingId) {
      // 1. Get Booking (With Error Handling)
      this.hotelService.getBookingById(bookingId).subscribe({
        next: (bookingData) => {
          this.booking = bookingData;

          // 2. Get Room
          this.hotelService.getRoomById(bookingData.roomId).subscribe({
            next: (roomData) => {
              this.room = roomData;

              // 3. Get Hotel
              this.hotelService.getHotelById(roomData.hotelId).subscribe({
                next: (hotelData) => {
                  this.hotel = hotelData;
                  this.isLoading = false; // SUCCESS: Stop loading
                },
                error: (err) => this.handleError('Could not find hotel details.', err)
              });
            },
            error: (err) => this.handleError('Could not find room details.', err)
          });
        },
        error: (err) => this.handleError('Booking not found. Please try again.', err)
      });
    } else {
      this.handleError('Invalid Booking ID.', null);
    }
  }

  // Helper to handle errors safely
  private handleError(message: string, error: any) {
    console.error(error);
    this.errorMessage = message;
    this.isLoading = false; // STOP LOADING even if there is an error
  }
}