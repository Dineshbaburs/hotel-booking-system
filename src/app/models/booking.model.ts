export interface Booking {
  id: number;
  userId: number;
  hotelId: number;
  roomId: number;
  checkInDate: string; // JSON server stores dates as strings
  checkOutDate: string;
  totalAmount: number;
  status: 'confirmed' | 'cancelled' | 'pending';
  guestCount: number;
}