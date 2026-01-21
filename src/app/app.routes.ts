import { Routes } from '@angular/router';
import { HotelListComponent } from './components/hotel-list/hotel-list';

export const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelListComponent }
];