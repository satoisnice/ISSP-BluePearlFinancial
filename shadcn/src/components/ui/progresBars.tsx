"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { Percent } from "lucide-react";
import mockAchievements from "@/data/mockAchievments";
import mockweeklyGoals from "@/data/mockWeeklyGoals";

function barColor(progression: number) {
  if (progression >= 90) return "[&>div]:bg-[var(--progressperfect)]";
  if (progression > 60) return "[&>div]:bg-[var(--progressgood)]";
  if (progression >= 40) return "[&>div]:bg-[var(--progressmedium)]";
  return "[&>div]:bg-[var(--progressbad)]";
}
function ProgressBar({ title }: { title: string }) {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-med mb-6">{title}</h1>
      {mockweeklyGoals.map((d) => {
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
      {mockAchievements.map((d) => {
        const pct = Math.round((d.current / d.goal) * 100);
        return (
          <div key={d.id}>
            <div className="mb-1 flex justify-between">
              <span>{d.id}</span>
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
