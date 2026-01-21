import { Routes } from '@angular/router';
import { HotelListComponent } from './components/hotel-list/hotel-list';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/:id', component: HotelDetailComponent } // <--- New Route
];