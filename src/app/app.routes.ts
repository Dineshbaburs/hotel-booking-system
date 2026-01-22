import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { HotelListComponent } from './components/hotel-list/hotel-list';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail';
import { BookingFormComponent } from './components/booking-form/booking-form';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { MyBookingsComponent } from './components/my-bookings/my-bookings';

export const routes: Routes = [
  // 1. DEFAULT IS NOW LOGIN
  { path: '', component: LoginComponent },
  
  // 2. MOVED HOME TO '/home'
  { path: 'home', component: HomeComponent },
  
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/:id', component: HotelDetailComponent },
  { path: 'book/:roomId', component: BookingFormComponent },
  { path: 'confirmation/:id', component: BookingConfirmationComponent },
  { path: 'login', redirectTo: '', pathMatch: 'full' }, // specific /login redirects to root
  { path: 'register', component: RegisterComponent },
  { path: 'my-bookings', component: MyBookingsComponent }
];