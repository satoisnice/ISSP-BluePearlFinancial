// Employee: Brooker or Manager
export interface Employee {
  id: string;
  brokerId: string;
  fullName: string;
  role: "broker" | "manager";
  email: string;
  phone?: string;
  extention?: string;
}

// Calls and Analysis

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
  storageType?: "transcript" | "audio" | "analysis" | "other";

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

  complianceNotes?: string;
  additionalNotes?: string;
}

// Client
export interface Client {
  id: string;
  name: string; //name is ambiguous. first name? last name? full name?
  phone: string;
  email: string;
  mortgageAmount?: string;
  propertyAddress?: string;
  lastContactDate: string;
  assignedBrokerId: string;
  source?: string; // From whom
  notes?: string; // Additional notes
}

// Client Profile
export interface ClientProfile {
  id: string;
  client: Client; // may not line up with db, possibly change to str
  employment?: string;
  family?: string;
  goals?: string;
  updatedAt: string;
  combinedIncome?: number;
  lifeEvents?: string[];
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

// Lead: lead is information on the client such as property, life shit, rate discussion, call quality, etc...
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
  callRecord?: CallRecord;
  competition?: string[];
}
export type Priority = "urgent" | "high" | "normal";
export type Tag = "follow-up" | "pipeline" | "prospecting";

export interface TodoItem {
  id: string;
  priority: Priority;
  tag: Tag;
  title: string;
  subtitle: string;
  amount?: string;
  stage?: string;
  actions?: { phone?: boolean; message?: boolean };
}

export interface MockAchievementItem {
  id: string;
  current: number;
  goal: number;
}
export interface WeeklyGoal {
  label: string;
  current: number;
  goal: number;
}

export interface ActiveDeal {
  id: number;
  client: string;
  title: string;
  agent: string;
  amount: number;
  property: string;
  stage: string;
  nextAction: string;
  days: number;
}
export interface PipelineItem {
  title: string;
  totalAmount: number;
  href: string;
  count: number;
}

export interface TodoItem {
  id: string;
  priority: Priority;
  tag: Tag;
  title: string;
  subtitle: string;
  amount?: string;
  stage?: string;
  actions?: { phone?: boolean; message?: boolean };
}
export type QA = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  bgVar: string;
};
export type PipelinecardItem = {
  title: string;
  count: number;
  detail: string;
};
export type Script = {
  title: string;
  subtitle: string;
};

export type ProspectingChallengeProps = {
  challengeTitle?: string;
  challengeNote?: string;
  challengeProgress?: number;
};
