import {
  CallRecord,
  CallStrength,
  Client,
  ClientProfile,
  Lead,
  LeadActvity,
} from "@/types/types";

export const client_1 = {
  
}

export const mock_client_1: Client = {
  id: "1",
  name: "John Doe",
  phone: "778-123-456",
  email: "johndoe@example.com",
  mortgageAmount: "$70,000",
  propertyAddress: "Burnaby",
  lastContactDate: "2019-09-07",
  assignedBrokerId: "1",
};

export const mock_client_profile_1: ClientProfile = {
  id: "1",
  client: mock_client_1,
  employment: "Working, just promoted to senior manager",
  family: "Married with 2 kids (17 and 14)",
  goals: "Reduce monthly payments and fund renovation",
  updatedAt: "2019-10-07",
};

export const mock_call_strength_1: CallStrength = {
  note: "Built great rapport by remembering daughter's university plans",
  timestamp: "0:35",
};

export const mock_call_strength_2: CallStrength = {
  note: "Clearly explained penalty calculation process",
  timestamp: "8:15",
};

export const mock_call_1: CallRecord = {
  id: "1",
  brokerId: "1",
  clientId: "1",
  contactName: "John Doe",
  phoneNumber: "778-123-456",
  callDate: "2019-09-07",
  duration: "23:21",
  summary:
    "Existing client looking to refinance and pull equity for investment property. Strong financial position but concerned about qualifying with rental property.",
  callQuality: {
    engagment: "high",
    sentiment: "positive",
  },
  keyPoints: [
    "Current mortgage renews in 45 days",
    "Worried about rate increases",
    "Has good equity in property",
    "Considering accessing equity for renovations",
  ],
  nextSteps: "refinance",
  followUpDate: "2019-10-07",
};

export const mock_lead_activity_1: LeadActvity = {
  id: "1",
  type: "quoted",
  createdAt: "2019-09-07",
};

export const mock_lead_1: Lead = {
  id: "1",
  client: mock_client_1,
  brokerId: "1",
  urgency: "high",
  type: "refinance",
  createdAt: "2019-09-07",
  status: "open",
  activities: [mock_lead_activity_1],

  propertyDetails: {
    type: "condo",
    value: 90000,
    location: "Vancouver, BC",
  },

  rateDiscussion: {
    currentRate: 4.79,
    desiredRate: 5.5,
    rateSensitive: true,
  },

  lifeEvents: [
    "Planning kitchen renovation this summer",
    "Husband got promoted last month",
    "Daughter starting university next year",
  ],
  objectionsAndResponses: [
    {
      objection: "TD is offering me 5.84% with $1,000 cashback",
      response:
        "I can likely beat that rate and explained our lender has better prepayment options",
      timestamp: ["5:23", "5:45"],
    },
    {
      objection: "mewoj",
      response: "meowww",
      timestamp: ["4:11", "4:14"],
    },
  ],
  crossSellOpportunities: [
    {
      type: "HELOC",
      description:
        "Kitchen rennovation plans - coujld access up to $125k equity",
    },
    {
      type: "Life Insurance",
      description: "Daughter going to university - education costs protection",
    },
  ],
  callRecord: mock_call_1,
  // recentCalls: [mock_call_1],
  competition: ["TD bank", "RBC Reached out last week."],
};

// client 2
export const mock_client_2: Client = {
  id: "2",
  name: "Emily Zhang",
  phone: "604-222-8888",
  email: "emily.zhang@example.com",
  mortgageAmount: "$650,000",
  propertyAddress: "Richmond, BC",
  lastContactDate: "2020-02-15",
  assignedBrokerId: "2",
};

export const mock_client_profile_2: ClientProfile = {
  id: "2",
  client: mock_client_2,
  employment: "Software Engineer at Amazon",
  family: "Single, relocated from Toronto",
  goals: "Purchase first home and lock a long-term fixed rate",
  updatedAt: "2020-03-01",
};

export const mock_call_strengths_2: CallStrength[] = [
  {
    note: "Explained insured vs. conventional mortgages clearly",
    timestamp: "3:40",
  },
  {
    note: "Identified client eligibility for FTHB program",
    timestamp: "7:12",
  },
];

export const mock_call_2: CallRecord = {
  id: "2",
  brokerId: "2",
  clientId: "2",
  contactName: "Emily Zhang",
  phoneNumber: "604-222-8888",
  callDate: "2020-02-15",
  duration: "18:09",
  summary:
    "First-time buyer seeking pre-approval for townhouse purchase in Richmond. High credit score and stable income.",
  callQuality: { engagment: "high", sentiment: "positive" },
  keyPoints: [
    "Discussed 5-year fixed vs. variable options",
    "Advised on CMHC insurance premiums",
  ],
  nextSteps: "Send income docs and employment letter",
  callStrengths: mock_call_strengths_2,
};

export const mock_lead_activity_2: LeadActvity = {
  id: "2",
  type: "application_started",
  createdAt: "2020-02-16",
};

export const mock_lead_2: Lead = {
  id: "2",
  client: mock_client_2,
  brokerId: "2",
  urgency: "medium",
  type: "new_purchase",
  createdAt: "2020-02-15",
  status: "in_progress",
  activities: [mock_lead_activity_2],
  propertyDetails: {
    type: "Townhouse",
    value: 780000,
    location: "Richmond, BC",
  },
  rateDiscussion: {
    currentRate: 5.1,
    desiredRate: 4.89,
    rateSensitive: false,
  },
  lifeEvents: ["Relocated to BC for new job"],
  keyDiscussionPoints: [
    "Interest rate stability is key",
    "Timeline to close within 60 days",
  ],
  crossSellOpportunities: [
    { type: "Credit Card", description: "Earn cashback on moving expenses" },
  ],
  callRecord: mock_call_2,
  // recentCalls: [mock_call_2],
  competition: ["Scotiabank", "HSBC"],
};

// Client 3
export const mock_client_3: Client = {
  id: "3",
  name: "Raj Patel",
  phone: "236-555-9090",
  email: "raj.patel@example.com",
  mortgageAmount: "$480,000",
  propertyAddress: "Surrey, BC",
  lastContactDate: "2021-05-12",
  assignedBrokerId: "1",
};

export const mock_client_profile_3: ClientProfile = {
  id: "3",
  client: mock_client_3,
  employment: "Truck Fleet Owner-Operator",
  family: "Married, 1 child",
  goals: "Renew mortgage early to lock better rate before increases",
  updatedAt: "2021-05-20",
};

export const mock_call_strengths_3: CallStrength[] = [
  { note: "Broker empathized with rate anxiety and reassured next steps", timestamp: "2:11" },
  { note: "Clarified renewal penalties and flexible terms", timestamp: "9:58" },
];

export const mock_call_3: CallRecord = {
  id: "3",
  brokerId: "1",
  clientId: "3",
  contactName: "Raj Patel",
  phoneNumber: "236-555-9090",
  callDate: "2021-05-12",
  duration: "16:42",
  summary:
    "Client's fixed term expiring in 3 months. Exploring early renewal options to avoid upcoming rate jumps.",
  callQuality: { engagment: "normal", sentiment: "neutral" },
  keyPoints: [
    "Explained blend-to-term vs. refinance trade-offs",
    "Client requested updated rate sheet",
  ],
  nextSteps: "Send renewal comparison chart",
  callStrengths: mock_call_strengths_3,
};

export const mock_lead_activity_3: LeadActvity = {
  id: "3",
  type: "follow_up",
  description: "Scheduled follow-up call for rate update",
  createdAt: "2021-05-15",
};

export const mock_lead_3: Lead = {
  id: "3",
  client: mock_client_3,
  brokerId: "1",
  urgency: "low",
  type: "renewal",
  createdAt: "2021-05-12",
  status: "open",
  activities: [mock_lead_activity_3],
  propertyDetails: {
    type: "Detached House",
    value: 820000,
    location: "Surrey, BC",
  },
  rateDiscussion: {
    currentRate: 4.25,
    desiredRate: 4.0,
  },
  keyDiscussionPoints: ["Renewal 90-day window", "Penalty-free options"],
  crossSellOpportunities: [
    { type: "Business Loan", description: "Could refinance trucks at lower rate" },
  ],
  callRecord: mock_call_3,
  // recentCalls: [mock_call_3],
  competition: ["BMO", "CIBC"],
};

// all clients exported
export const mock_clients = [
  {
    client: mock_client_1,
    clientProfile: mock_client_profile_1,
    callRecord: mock_call_1,
    lead: mock_lead_1,
    leadActivity: mock_lead_activity_1,
    callStrengths: [mock_call_strength_1, mock_call_strength_2],
  },
   {
    client: mock_client_2,
    clientProfile: mock_client_profile_2,
    callRecord: mock_call_2,
    lead: mock_lead_2,
    leadActivity: mock_lead_activity_2,
    callStrengths: mock_call_strengths_2,
  },
  {
    client: mock_client_3,
    clientProfile: mock_client_profile_3,
    callRecord: mock_call_3,
    lead: mock_lead_3,
    leadActivity: mock_lead_activity_3,
    callStrengths: mock_call_strengths_3,
  },
];
