import {
  CallRecord,
  CallStrength,
  Client,
  ClientProfile,
  Lead,
  LeadActvity,
} from "@/types/types";

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
  timestamp: "8:15"
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
  sentiment: "positive",
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
      description: "Kitchen rennovation plans - coujld access up to $125k equity"
    },
    {
      type: "Life Insurance",
      description: "Daughter going to university - education costs protection"
    }
  ],

  callQuality: {
    engagement: mock_call_1["sentiment"],
  },

  recentCalls: [mock_call_1],
};
