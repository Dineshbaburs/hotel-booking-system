import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips'; // For amenities
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel.model';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './hotel-detail.html',
  styleUrl: './hotel-detail.css'
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel | undefined;
  rooms: Room[] = [];

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    // 1. Get Hotel Details
    this.hotelService.getHotelById(id).subscribe(data => {
      this.hotel = data;
    });

    // 2. Get Available Rooms
    this.hotelService.getRoomsByHotelId(id).subscribe(data => {
      this.rooms = data;
    });
  }
}