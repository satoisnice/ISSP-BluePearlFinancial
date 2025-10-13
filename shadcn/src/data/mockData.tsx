// src/data/mockClients.ts
import { Client } from "@/types/types";

export const mockClients: Client[] = [
  {
    id: "1",
    name: "Jennifer Martinez",
    phone: "(604) 555-0234",
    email: "j.martinez@email.com",
    mortgageAmount: "$85,000",
    propertyAddress: "123 Main St, Vancouver",
    lastContactDate: "2025-10-11T10:00:00Z", // ISO format
    assignedBrokerId: "broker-1",
    
    // Add custom fields for prospecting if needed
    source: "Website",
    priority: "hot",
    notes: "Pre-approved, looking to close in 30 days"
  },
  {
    id: "2",
    name: "David Kim",
    phone: "(778) 555-0567",
    email: "dkim.realtor@gmail.com",
    mortgageAmount: "$120,000",
    propertyAddress: "456 Oak Ave, Burnaby",
    lastContactDate: "2025-10-11T06:00:00Z",
    assignedBrokerId: "broker-1",
    
    source: "Referral",
    priority: "hot",
    notes: "First-time buyer, very responsive"
  },
  {
    id: "3",
    name: "Lisa Thompson",
    phone: "(604) 555-0789",
    email: "lisa.t.home@outlook.com",
    mortgageAmount: "$95,000",
    propertyAddress: "789 Pine St, Surrey",
    lastContactDate: "2025-10-10T10:00:00Z",
    assignedBrokerId: "broker-1",
    
    source: "Google Ads",
    priority: "warm",
    notes: "Comparing rates, needs follow-up"
  },
  {
    id: "4",
    name: "Michael Rodriguez",
    phone: "(778) 555-0321",
    email: "m.rodriguez@techcorp.com",
    mortgageAmount: "$150,000",
    propertyAddress: "321 Elm St, Downtown",
    lastContactDate: "2025-10-09T10:00:00Z",
    assignedBrokerId: "broker-1",
    
    source: "LinkedIn",
    priority: "warm",
    notes: "High income, investment property"
  }
];