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

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    const bookingId = Number(this.route.snapshot.paramMap.get('id'));

    if (bookingId) {
      // 1. Get the Booking Details
      this.hotelService.getBookingById(bookingId).subscribe(bookingData => {
        this.booking = bookingData;

        // 2. Get the Room Details (using roomId from booking)
        this.hotelService.getRoomById(bookingData.roomId).subscribe(roomData => {
          this.room = roomData;

          // 3. Get the Hotel Details (using hotelId from room)
          this.hotelService.getHotelById(roomData.hotelId).subscribe(hotelData => {
            this.hotel = hotelData;
            this.isLoading = false;
          });
        });
      });
    }
  }
}