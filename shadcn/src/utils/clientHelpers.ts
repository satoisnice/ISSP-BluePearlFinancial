import { Lead } from "@/types/types";

export const urgencyToPriority = (urgency: Lead["urgency"]): "hot" | "warm" | "cold" => {
    const map = {
        high: "hot",
        medium: "warm",
        low: "cold"
    } as const;
    return map[urgency];
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