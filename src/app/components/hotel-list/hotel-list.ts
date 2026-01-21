import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router'; // <--- 1. Import ActivatedRoute
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatCardModule, 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './hotel-list.html',
  styleUrl: './hotel-list.css'
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute // <--- 2. Inject Route
  ) {}

  ngOnInit(): void {
    // 3. Listen to the URL query parameters
    this.route.queryParams.subscribe(params => {
      const location = params['location']; // Get "Bengaluru" from URL
      
      // 4. Send location to the service
      this.hotelService.getHotels(location).subscribe(data => {
        this.hotels = data;
      });
    });
  }
}