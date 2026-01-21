import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    MatCardModule, 
    MatButtonModule,
    MatFormFieldModule, 
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  selectedLocation: string = '';
  
  // Hardcoded locations for now (based on your DB)
  locations: string[] = ['New York', 'Bali', 'Paris', 'London', 'Dubai'];

  constructor(private router: Router) {}

  onSearch() {
    if (this.selectedLocation) {
      // Navigate to /hotels?location=New York
      this.router.navigate(['/hotels'], { queryParams: { location: this.selectedLocation } });
    }
  }
}