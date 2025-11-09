// src/data/mockClients.ts
import { Client } from "@/types/types";

export const mockClients: Client[] = [
  {
    id: "client-1",
    name: "Jennifer Martinez",
    phone: "(604) 555-0234",
    email: "j.martinez@email.com",
    mortgageAmount: "$85,000",
    propertyAddress: "Condo, Vancouver area",
    lastContactDate: "2025-10-11T10:00:00Z",
    assignedBrokerId: "broker-1",
    source: "Website",
    notes: "Interested in downtown condos"
  },
  {
    id: "client-2",
    name: "David Kim",
    phone: "(778) 555-0567",
    email: "dkim.realtor@gmail.com",
    mortgageAmount: "$120,000",
    propertyAddress: "Townhouse, Burnaby",
    lastContactDate: "2025-10-11T06:00:00Z",
    assignedBrokerId: "broker-1",
    source: "Referral",
    notes: "First-time buyer"
  },
  {
    id: "client-3",
    name: "Lisa Thompson",
    phone: "(604) 555-0789",
    email: "lisa.t.home@outlook.com",
    mortgageAmount: "$95,000",
    propertyAddress: "House, Surrey",
    lastContactDate: "2025-10-10T10:00:00Z",
    assignedBrokerId: "broker-1",
    source: "Google Ads",
    notes: "Comparing rates with competitors"
  },
  {
    id: "client-4",
    name: "Michael Rodriguez",
    phone: "(778) 555-0321",
    email: "m.rodriguez@techcorp.com",
    mortgageAmount: "$150,000",
    propertyAddress: "Investment property, Downtown",
    lastContactDate: "2025-10-09T10:00:00Z",
    assignedBrokerId: "broker-1",
    source: "LinkedIn",
    notes: "High income, looking at investment properties"
  }
];