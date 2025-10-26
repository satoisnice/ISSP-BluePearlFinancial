export type Priority = "urgent" | "high" | "normal";
export type Tag = "follow-up" | "pipeline" | "prospecting";

export interface MockTodoItem {
  id: string;
  priority: Priority;
  tag: Tag;
  title: string;
  subtitle: string;
  amount?: string;
  stage?: string;
  actions?: { phone?: boolean; message?: boolean };
}

export const mockTodo: MockTodoItem[] = [
  {
    id: "sarah johnson",
    priority: "urgent",
    tag: "follow-up",
    title: "Sarah Johnson",
    subtitle: "Send application documents",
    amount: "$45,000",
    stage: "Application",
    actions: { phone: true, message: true },
  },
  {
    id: "michael chen",
    priority: "high",
    tag: "pipeline",
    title: "Michael Chen",
    subtitle: "Check underwriter status",
    amount: "$120,000",
    stage: "Underwriting",
    actions: { phone: true, message: true },
  },
  {
    id: "new web leads",
    priority: "normal",
    tag: "prospecting",
    title: "New Web Leads (5)",
    subtitle: "Initial outreach calls",
    actions: { message: true },
  },

  {
    id: "emily zhang",
    priority: "high",
    tag: "follow-up",
    title: "Emily Zhang",
    subtitle: "Confirm income docs received",
    amount: "$650,000",
    stage: "Pre-Approval",
    actions: { phone: true, message: true },
  },
  {
    id: "raj patel",
    priority: "normal",
    tag: "pipeline",
    title: "Raj Patel",
    subtitle: "Send renewal comparison chart",
    amount: "$480,000",
    stage: "Renewal",
    actions: { message: true },
  },
  {
    id: "aisha khan",
    priority: "high",
    tag: "follow-up",
    title: "Aisha Khan",
    subtitle: "Schedule appraisal appointment",
    amount: "$710,000",
    stage: "Appraisal",
    actions: { phone: true, message: true },
  },
  {
    id: "daniel park",
    priority: "normal",
    tag: "pipeline",
    title: "Daniel Park",
    subtitle: "Verify employment letter format",
    amount: "$540,000",
    stage: "Docs",
    actions: { message: true },
  },
  {
    id: "olivia brown",
    priority: "urgent",
    tag: "follow-up",
    title: "Olivia Brown",
    subtitle: "Call about pre-approval conditions",
    amount: "$835,000",
    stage: "Pre-Approval",
    actions: { phone: true, message: true },
  },
  {
    id: "mateo garcia",
    priority: "normal",
    tag: "prospecting",
    title: "Mateo Garcia",
    subtitle: "Intro call: first-time buyer",
    amount: "$520,000",
    stage: "Discovery",
    actions: { phone: true, message: true },
  },
  {
    id: "grace wu",
    priority: "high",
    tag: "follow-up",
    title: "Grace Wu",
    subtitle: "Request HOA document package",
    amount: "$905,000",
    stage: "Docs",
    actions: { message: true },
  },
];

export default mockTodo;
