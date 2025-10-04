"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { Percent } from "lucide-react";

const data = [
  { label: "Applications", current: 8, goal: 10 },
  { label: "Approvals", current: 3, goal: 5 },
  { label: "Documents", current: 4, goal: 10 },
  { label: "Cold Calls", current: 25, goal: 50 },
  { label: "Client Outreach", current: 10, goal: 11 },
  { label: "Supervisor Reports", current: 4, goal: 5 },
  { label: "Emails", current: 2, goal: 15 },
];

const achivementdata = [
  { label: "Doc Warrior", current: 8, goal: 10 },
  { label: "Quality Master", current: 4, goal: 5 },
  { label: "Speed Demon", current: 9, goal: 10 },
];

function barColor(pct: number) {
  if (pct >= 90) return "[&>div]:bg-[var(--progressperfect)]";
  if (pct > 60) return "[&>div]:bg-[var(--progressgood)]";
  if (pct >= 40) return "[&>div]:bg-[var(--progressmedium)]";
  return "[&>div]:bg-[var(--progressbad)]";
}
function ProgressBar({ title }: { title: string }) {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-med mb-6">{title}</h1>
      {data.map((d) => {
        const pct = Math.round((d.current / d.goal) * 100);
        return (
          <div key={d.label}>
            <div className="mb-1 flex justify-between">
              <span>{d.label}</span>
              <span className="font-medium">
                {d.current}/{d.goal}
              </span>
            </div>
            <Progress
              value={pct}
              className={`h-3 w-full bg-muted rounded-full ${barColor(
                pct
              )} [&>div]:rounded-full`}
            />
          </div>
        );
      })}
    </div>
  );
}

function Acheivmentbar({ title }: { title: string }) {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-med mb-6">{title}</h1>
      {achivementdata.map((d) => {
        const pct = Math.round((d.current / d.goal) * 100);
        return (
          <div key={d.label}>
            <div className="mb-1 flex justify-between">
              <span>{d.label}</span>
              <span className="font-medium">
                {d.current}/{d.goal}
              </span>
            </div>
            <Progress
              value={pct}
              className={
                "h-3 w-full bg-muted [&>div]:rounded-full [&>div]:!bg-[var(--chartcolor1)]"
              }
            />
          </div>
        );
      })}
    </div>
  );
}
export { ProgressBar };
export { Acheivmentbar };
