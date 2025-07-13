import { Plane, Car, Hotel, Camera, Map, Headphones } from 'lucide-react';

export interface Service {
  icon: any; // Lucide React icon component
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Competitive rates on domestic and international flights with instant confirmations and 24/7 booking support."
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Handpicked accommodations from budget stays to luxury resorts, ensuring comfort and quality at every price point."
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Reliable ground transportation including airport transfers, car rentals, and private chauffeur services."
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Specialized photography expeditions to capture scenic and culturally rich destinations with expert guidance."
  },
  {
    icon: Map,
    title: "Custom Itineraries",
    description: "Personalized travel plans crafted to match your interests, budget, and schedule for unique experiences."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support ensuring assistance and peace of mind throughout your entire journey."
  }
];