// src/data/mockCallRecords.ts
import { CallRecord } from "@/types/types";

export const mockCallRecords: CallRecord[] = [
  {
    id: "call-1",
    brokerId: "broker-1",
    clientId: "client-1",  // ← Links to Jennifer Martinez
    contactName: "Jennifer Martinez",
    phoneNumber: "(604) 555-0234",
    callDate: "2025-10-11T10:00:00Z",
    duration: "08:45",
    audioUrl: "/audio/call-1.mp3",
    
    // AI Analysis
    summary: "Client is pre-approved and ready to close within 30 days. Very motivated.",
    urgencyLevel: "high",  // ← THIS IS THE KEY! "high" = "hot" priority
    keyPoints: [
      "Pre-approved for $85,000",
      "Looking at condos in Vancouver",
      "Wants to close by end of November"
    ],
    nextSteps: "Send application documents today",
    followUpDate: "2025-10-12"
  },
  {
    id: "call-2",
    brokerId: "broker-1",
    clientId: "client-2",  // ← Links to David Kim
    contactName: "David Kim",
    phoneNumber: "(778) 555-0567",
    callDate: "2025-10-11T06:00:00Z",
    duration: "12:30",
    audioUrl: "/audio/call-2.mp3",
    
    summary: "First-time buyer, very responsive. Needs education on the process.",
    urgencyLevel: "high",  // ← "high" = "hot" priority
    keyPoints: [
      "First-time home buyer",
      "Good credit score",
      "Eager to learn about mortgage options"
    ],
    nextSteps: "Schedule follow-up to discuss rates",
    followUpDate: "2025-10-13"
  },
  {
    id: "call-3",
    brokerId: "broker-1",
    clientId: "client-3",  // ← Links to Lisa Thompson
    contactName: "Lisa Thompson",
    phoneNumber: "(604) 555-0789",
    callDate: "2025-10-10T10:00:00Z",
    duration: "06:15",
    audioUrl: "/audio/call-3.mp3",
    
    summary: "Currently comparing rates with other lenders. Price-sensitive.",
    urgencyLevel: "medium",  // ← "medium" = "warm" priority
    keyPoints: [
      "Shopping around for best rate",
      "Has competing offer from another lender",
      "Wants to decide by next week"
    ],
    nextSteps: "Follow up with competitive rate analysis",
    followUpDate: "2025-10-14"
  },
  {
    id: "call-4",
    brokerId: "broker-1",
    clientId: "client-4",  // ← Links to Michael Rodriguez
    contactName: "Michael Rodriguez",
    phoneNumber: "(778) 555-0321",
    callDate: "2025-10-09T10:00:00Z",
    duration: "15:20",
    audioUrl: "/audio/call-4.mp3",
    
    summary: "High-income professional looking at investment property. Timeline flexible.",
    urgencyLevel: "medium",  // ← "medium" = "warm" priority
    keyPoints: [
      "Strong financial position",
      "Looking at investment properties",
      "Not in a rush, exploring options"
    ],
    nextSteps: "Send information on investment property mortgages",
    followUpDate: "2025-10-16"
  },
  {
    id: "call-5",
    brokerId: "broker-1",
    clientId: "client-1",  // ← Another call with Jennifer (same client!)
    contactName: "Jennifer Martinez",
    phoneNumber: "(604) 555-0234",
    callDate: "2025-10-09T14:00:00Z",
    duration: "05:30",
    audioUrl: "/audio/call-5.mp3",
    
    summary: "Initial inquiry about condo financing options.",
    urgencyLevel: "medium",  // ← Her EARLIER call was less urgent
    keyPoints: [
      "Just started looking",
      "Wants to understand the process",
      "Asked about pre-approval"
    ],
    nextSteps: "Send pre-approval application",
    followUpDate: "2025-10-11"
  }
];