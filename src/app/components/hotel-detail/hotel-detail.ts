import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; // <--- 1. Import RouterModule
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
    RouterModule, // <--- 2. Add it here!
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

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      this.hotelService.getHotelById(id).subscribe((data: Hotel) => {
        this.hotel = data;
      });

      this.hotelService.getRoomsByHotelId(id).subscribe((data: Room[]) => {
        this.rooms = data;
      });
    }
  }
}
