import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router'; // <--- Import ActivatedRoute
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
    private route: ActivatedRoute // <--- Inject Route
  ) {}

  ngOnInit(): void {
    // Check for query params (e.g. ?location=New York)
    this.route.queryParams.subscribe(params => {
      const location = params['location'];
      
      // Fetch hotels (filtered or all)
      this.hotelService.getHotels(location).subscribe(data => {
        this.hotels = data;
      });
    });
  }
}