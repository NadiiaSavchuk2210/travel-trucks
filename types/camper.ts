import { VEHICLE_TYPES } from "@/constants/filter-constants";

export interface GalleryItem {
  thumb: string;
  original: string;
}

export interface ReviewItem {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export type VehicleType = (typeof VEHICLE_TYPES)[number];

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
  gallery: GalleryItem[];
  reviews: ReviewItem[];
}

export interface BookingData {
  camperId: string;
  name: string;
  email: string;
  bookingDate: string;
  comment?: string;
  created_at: string;
}

export interface NewBookingData {
  name: string;
  email: string;
  bookingDate: string;
  comment?: string;
}
