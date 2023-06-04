export interface Flight {
  id: number;
  from: string;
  to: string;
  departureDate: string;
  class: string;
  reservedSeats: string[]
  totalSeatsCount: number
  pricePerSeat: number;
}
