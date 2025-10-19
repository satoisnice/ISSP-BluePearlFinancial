// Kyle's Mock Data for Leads
import { Lead } from "@/types/types";

export const mockLeads: Lead[] = [
  {
    id: "lead-1",
    client: {
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
    brokerId: "broker-1",
    urgency: "high",
    type: "new_purchase",
    createdAt: "2025-10-09T00:00:00Z",
    status: "in_progress",
    
    propertyDetails: {
      type: "condo",
      value: 85000,
      location: "Vancouver"
    },
    
    rateDiscussion: {
      currentRate: 5.5,
      desiredRate: 5.0,
      rateSensitive: true
    },
    
    activities: [
      {
        id: "activity-1",
        type: "application_started",
        description: "Client started mortgage application",
        createdAt: "2025-10-09T10:00:00Z"
      }
    ],
    
    callQuality: {
      engagement: "high"
    }
  },
  
  {
    id: "lead-2",
    client: {
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
    brokerId: "broker-1",
    urgency: "high", 
    type: "new_purchase",
    createdAt: "2025-10-09T00:00:00Z",
    status: "in_progress",
    
    activities: [],
    
    callQuality: {
      engagement: "high"
    }
  },
  
  {
    id: "lead-3",
    client: {
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
    brokerId: "broker-1",
    urgency: "medium", 
    type: "new_purchase",
    createdAt: "2025-10-08T00:00:00Z",
    status: "open",
    
    activities: [],
    
    callQuality: {
      engagement: "medium"
    }
  },
  
  {
    id: "lead-4",
    client: {
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
    },
    brokerId: "broker-1",
    urgency: "medium",
    type: "refinance",
    createdAt: "2025-10-07T00:00:00Z",
    status: "open",
    
    activities: [],
    
    callQuality: {
      engagement: "medium"
    }
  }
];