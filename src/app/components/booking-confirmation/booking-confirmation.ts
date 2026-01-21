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
  
  // NEW: Variable to hold the random room number
  assignedRoomNumber: number = 0;

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    const bookingId = Number(this.route.snapshot.paramMap.get('id'));

    // GENERATE RANDOM ROOM NUMBER (Between 101 and 599)
    this.assignedRoomNumber = Math.floor(Math.random() * 500) + 100;

    if (bookingId) {
      this.hotelService.getBookingById(bookingId).subscribe(bookingData => {
        this.booking = bookingData;

        this.hotelService.getRoomById(bookingData.roomId).subscribe(roomData => {
          this.room = roomData;

          this.hotelService.getHotelById(roomData.hotelId).subscribe(hotelData => {
            this.hotel = hotelData;
            this.isLoading = false;
          });
        });
      });
    }
  }
}