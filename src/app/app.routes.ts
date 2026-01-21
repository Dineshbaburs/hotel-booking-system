import { Routes } from '@angular/router';
import { HotelListComponent } from './components/hotel-list/hotel-list'; // <--- Check filename

export const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: 'full' }, // <--- Default Route
  { path: 'hotels', component: HotelListComponent }
];