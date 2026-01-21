import { Routes } from '@angular/router';
import { HotelListComponent } from './components/hotel-list/hotel-list';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail';
import { BookingFormComponent } from './components/booking-form/booking-form'; // <--- Import

export const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/:id', component: HotelDetailComponent },
  { path: 'book/:roomId', component: BookingFormComponent } // <--- New Route
];