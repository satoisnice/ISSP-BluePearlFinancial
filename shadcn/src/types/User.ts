// renamed from User -> Employee
export interface Employee{
    id: string;
    brokerId: string;
    fullName: string;
    role: "broker" | "manager";
    email: string;
}

export interface CallRecord {
    id: string;
    brokerId: string;
    clientId: string;
    contactName: string;
    phoneNumber: string;
    callDate: string; // ISO date string
    duration: string; // "MM:SS" format
    audioUrl?: string; // mock url -Edward

    // AI ANalysis (pre-gen in mock data)
    summary: string;
    urgencyLevel: "high" | "medium" | "low";
    keyPoints: string[];
    nextSteps: string;
    followUpDate?: string;
}

export interface Client {
    id: string;
    name: string; //name is ambiguous. first name? last name? full name?
    phone: string;
    email: string;
    mortgageAmount?: string;
    propertyAddress?: string;
    lastContactDate: string;
    assignedBrokerId: string;
}