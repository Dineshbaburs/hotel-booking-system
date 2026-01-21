import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { HotelListComponent } from './components/hotel-list/hotel-list';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail';
import { BookingFormComponent } from './components/booking-form/booking-form';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation'; // <--- Import

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/:id', component: HotelDetailComponent },
  { path: 'book/:roomId', component: BookingFormComponent },
  { path: 'confirmation/:id', component: BookingConfirmationComponent } // <--- Add Route
];