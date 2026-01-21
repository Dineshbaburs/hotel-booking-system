export interface Hotel {
  id: number;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number; // 1 to 5
  description: string;
  thumbnail: string; // URL to image
  images: string[]; // Array of image URLs
  amenities: string[]; // e.g., ['WiFi', 'Pool', 'Parking']
}