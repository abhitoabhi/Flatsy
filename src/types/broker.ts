export interface Broker {
  id: string;
  name: string;
  city: string;
  areasServed: string[];
  specialization: "Residential" | "Commercial" | "PG" | "All";
  yearsOfExperience: number;
  propertiesAvailable: number;
  commission: string;
  contactNumber: string;
  verified: boolean;
  rating: number;
  totalReviews: number;
  avatar?: string;
  createdAt: string;
}
