import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar'; // <--- Import Navbar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // <--- Add to imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'hotel-booking-system';
}