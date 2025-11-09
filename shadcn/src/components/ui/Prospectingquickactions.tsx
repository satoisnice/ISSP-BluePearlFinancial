"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { scripts, challenge } from "@/data/prospectingtodomock";

export default function ProspectingSidebar() {
  return (
    <div className="space-y-4">
      {/* Call Scripts */}
      <div className="bg-card text-card-foreground rounded-xl p-4 border border-border">
        <h3 className="font-semibold mb-3">Call Scripts</h3>
        <div className="space-y-2">
          {scripts.map((s, i) => (
            <button
              key={`${s.title}-${i}`}
              className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="font-medium text-sm">{s.title}</div>
              <div className="text-xs text-muted-foreground">{s.subtitle}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-card text-card-foreground rounded-xl p-4 border border-border">
        <h3 className="font-semibold mb-2">{challenge.challengeTitle}</h3>
        <p className="text-sm text-muted-foreground mb-3">
          {challenge.challengeNote}
        </p>
        <div className="w-full rounded-full h-2 mb-2 bg-muted">
          <Progress value={challenge.challengeProgress} />
        </div>
      </div>
    </div>
  );
}
