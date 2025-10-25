// renamed from User -> Employee
export interface Employee {
  id: string;
  brokerId: string;
  fullName: string;
  role: "broker" | "manager";
  email: string;
}

export interface CallStrength {
  note: string; // "e.g. did something amazing..."
  timestamp?: string; // 0:45
}
export interface CallRecord {
  id: string;
  brokerId: string;
  clientId: string;
  contactName: string; // client
  phoneNumber: string;
  callDate: string; // ISO date string
  duration: string; // "MM:SS" format
  audioUrl?: string; // mock url -Edward

  // AI ANalysis (pre-gen in mock data)
  summary: string;
  callQuality?: {
    sentiment?: "positive" | "neutral" | "negative";
    engagment?: "high" | "normal" | "low";
  };
  keyPoints: string[]; // list of strings
  nextSteps: string;
  followUpDate?: string;
  callStrengths?: CallStrength[];
}

export interface Client {
  id: string;
  name: string; //full name
  phone: string;
  email: string;
  mortgageAmount?: string;
  propertyAddress?: string;
  lastContactDate: string;
  assignedBrokerId: string;
  source?: string; // From whom
  notes?: string; // Additional notes
}

export interface ClientProfile {
  id: string;
  client: Client; // may not line up with db, possibly change to str
  employment?: string;
  family?: string;
  goals?: string;
  updatedAt: string;
}


export interface LeadActvity {
  id: string;
  type:
    | "voicemail"
    | "application_started"
    | "quoted"
    | "documents_requested"
    | "documents_received"
    | "follow_up"
    | "note";
  description?: string;
  createdAt: string;
}

// lead is information on the client such as property, life shit, rate discussion, call quality, etc...
export interface Lead {
  id: string;
  client: Client;
  brokerId: string;
  urgency: "low" | "medium" | "high";
  type: "renewal" | "new_purchase" | "refinance"; // come back to this
  createdAt: string;
  status: "open" | "in_progress" | "closed";
  activities?: LeadActvity[];

  propertyDetails?: {
    type: string;
    value: number;
    location: string;
  };

  rateDiscussion?: {
    currentRate: number;
    desiredRate?: number;
    rateSensitive?: boolean;
  };

  lifeEvents?: string[];
  keyDiscussionPoints?: string[];
  objectionsAndResponses?: {
    objection: string;
    response: string;
    timestamp: string[]; // list of times ["4:23", "5:11"]
  }[]; // list of dicts
  crossSellOpportunities?: {
    type: string;
    description: string;
  }[];

  callQuality?: {
    engagement: Lead["urgency"];
  };

}
