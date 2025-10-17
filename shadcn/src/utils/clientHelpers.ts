import { Client, CallRecord } from "@/types/types";

const urgencytoPriority = {
    high: "hot",
    medium: "warm",
    low: "cold"
} as const;

export const getLatestCall = (
    clientId: string,
    callRecords: CallRecord[]
): CallRecord | undefined => {
    const clientCalls = callRecords
    .filter(call => call.clientId === clientId)
    .sort((a, b) => new Date(b.callDate).getTime() - new Date(a.callDate).getTime())

    return clientCalls[0];
};

export const getClientPriority = (
    client: Client,
    callRecords: CallRecord[]
): "hot" | "warm" | "cold" => {
    const latestCall = getLatestCall(client.id, callRecords);

    if (!latestCall) return "cold";

    return urgencytoPriority[latestCall.urgencyLevel];
};

export const getTimeAgo = (isoDate: string): string => {
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 1) return "Less than an hour ago";
    if (diffHours < 24) return `${diffHours} hour(s) ago`;

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day(s) ago`;
}