import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home'; // <--- Import Home
import { HotelListComponent } from './components/hotel-list/hotel-list';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail';
import { BookingFormComponent } from './components/booking-form/booking-form';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // <--- Changed from redirectTo
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/:id', component: HotelDetailComponent },
  { path: 'book/:roomId', component: BookingFormComponent }
];