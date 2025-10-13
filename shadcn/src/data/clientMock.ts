import { CallRecord, Client } from "@/types/types";

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
  urgencyLevel: "high",
  keyPoints: [
    "Current mortgage renews in 45 days",
    "Worried about rate increases",
    "Has good equity in property",
    "Considering accessing equity for renovations",
  ],
  nextSteps: "refinance",
  followUpDate: "2019-10-07"
};
