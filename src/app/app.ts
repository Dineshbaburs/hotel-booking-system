import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // <--- Included Navbar
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { // <--- Renamed to AppComponent (Standard)
  title = 'hotel-booking-system';
}