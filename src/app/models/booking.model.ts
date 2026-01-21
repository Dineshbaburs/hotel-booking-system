export interface Booking {
  id?: number; // Optional because DB creates it
  roomId: number;
  guestName: string;
  email: string;
  checkInDate: string;
  checkOutDate: string;
  totalPrice: number;
  status: 'confirmed' | 'cancelled';
}