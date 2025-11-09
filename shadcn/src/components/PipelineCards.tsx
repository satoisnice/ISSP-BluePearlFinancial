"use client";

import * as React from "react";
import mockProspecting from "@/data/mockprospectingcards";
import { Users, RotateCw, TrendingUp, Phone } from "lucide-react";

type IconKey = "Users" | "RotateCw" | "TrendingUp" | "Phone";

const buttonPalette = [
  "bg-chart-1 text-primary-foreground",
  "bg-chart-2 text-primary-foreground",
  "bg-chart-3 text-primary-foreground",
  "bg-chart-4 text-primary-foreground",
  "bg-chart-5 text-primary-foreground",
];
const buttonColor = (i: number) => buttonPalette[i % buttonPalette.length];

const iconForTitle = (title: string): IconKey => {
  const t = title.toLowerCase();
  if (t.includes("lead")) return "Users";
  if (t.includes("follow")) return "RotateCw";
  if (t.includes("convert") || t.includes("rate")) return "TrendingUp";
  if (t.includes("call")) return "Phone";
  return "Users";
};

const Icons: Record<IconKey, React.ComponentType<{ size?: number }>> = {
  Users,
  RotateCw,
  TrendingUp,
  Phone,
};

const detailClass = (s: string) => {
  const t = s.toLowerCase().trim();
  if (t.includes("overdue")) return "text-[color:var(--destructive)]";
  if (t.startsWith("+")) return "text-[color:var(--progressgood)]";
  return "text-muted-foreground";
};

export default function ProspectingCards() {
  const items = mockProspecting;

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold">Pipeline</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((a, i) => {
          const Icon = Icons[iconForTitle(a.title)];
          return (
            <div
              key={`${a.title}-${i}`}
              className="rounded-2xl p-5 transition-colors bg-card text-card-foreground border border-border hover:border-foreground/20"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="text-base sm:text-lg font-semibold">
                    {a.title}
                  </div>
                  <div className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
                    (a.count)
                  </div>
                  <div className={`mt-2 text-base ${detailClass(a.detail)}`}>
                    {a.detail}
                  </div>
                </div>

                <div
                  className={`shrink-0 rounded-xl p-3 shadow-sm ${buttonColor(
                    i
                  )}`}
                >
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
