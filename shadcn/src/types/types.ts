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
    timestamp: string;
  }[];

  callQuality?: {
    engagement: CallRecord["sentiment"];
  };

  recentCalls?: CallRecord[];
}
