import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HotelService } from '../../services/hotel.service';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // <--- Required for Forms
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css'
})
export class BookingFormComponent implements OnInit {
  bookingForm: FormGroup;
  roomId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private router: Router
  ) {
    // Initialize Form
    this.bookingForm = this.fb.group({
      guestName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // 1. Get Room ID from URL
    this.roomId = Number(this.route.snapshot.paramMap.get('roomId'));
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      // 2. Prepare Booking Data
      const bookingData: Booking = {
        roomId: this.roomId,
        guestName: this.bookingForm.value.guestName,
        email: this.bookingForm.value.email,
        checkInDate: this.bookingForm.value.checkInDate,
        checkOutDate: this.bookingForm.value.checkOutDate,
        totalPrice: 0, // We will calculate this later
        status: 'confirmed'
      };

      // 3. Send to Server
      this.hotelService.createBooking(bookingData).subscribe(() => {
        alert('Booking Confirmed!');
        this.router.navigate(['/hotels']); // Go back to home
      });
    }
  }
}