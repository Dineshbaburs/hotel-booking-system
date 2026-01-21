import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.model';
import { Room } from '../models/room.model';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // FIXED: Now accepts a 'location' to filter the list
  getHotels(location?: string): Observable<Hotel[]> {
    let url = `${this.apiUrl}/hotels`;
    if (location) {
      // ?location_like=Goa finds "Goa, India"
      url += `?location_like=${location}`; 
    }
    return this.http.get<Hotel[]>(url);
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/hotels/${id}`);
  }

  getRoomsByHotelId(hotelId: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/rooms?hotelId=${hotelId}`);
  }

  createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/bookings`, booking);
  }
}