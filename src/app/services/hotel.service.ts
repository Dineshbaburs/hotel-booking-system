import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hotel } from '../models/hotel.model';
import { Room } from '../models/room.model';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHotels(location?: string): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hotels`).pipe(
      map(hotels => {
        if (location) {
          return hotels.filter(hotel => 
            hotel.location.toLowerCase().includes(location.toLowerCase())
          );
        }
        return hotels;
      })
    );
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/hotels/${id}`);
  }

  getRoomsByHotelId(hotelId: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/rooms?hotelId=${hotelId}`);
  }

  // --- NEW METHODS BELOW ---

  // 1. Get a specific room (to show details on confirmation)
  getRoomById(roomId: string | number): Observable<Room> {
    return this.http.get<Room>(`${this.apiUrl}/rooms/${roomId}`);
  }

  // 2. Create Booking (Returns the saved booking with ID)
  createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiUrl}/bookings`, booking);
  }

  // 3. Get Booking by ID (For the Confirmation Page)
  getBookingById(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/bookings/${id}`);
  }
}