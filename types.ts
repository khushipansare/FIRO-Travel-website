export interface Hotel {
  name: string;
  rating: number;
}

export interface TouristPoint {
  name: string;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  description: string;
  imageUrl: string;
  priceStart: number;
  hotels: Hotel[];
  touristPoints: TouristPoint[];
  featured?: boolean;
}

export type PaymentMethod = 'UPI' | 'CARD' | 'NETBANKING';

export interface BookingDetails {
  origin: string;
  destination: string;
  date: string;
  passengers: number;
  mode: 'flight' | 'train' | 'bus';
}
