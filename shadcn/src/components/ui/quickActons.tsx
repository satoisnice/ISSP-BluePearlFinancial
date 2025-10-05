"use client";

import Link from "next/link";
import * as React from "react";

type QA = {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  bgVar: string;
};

const actions: QA[] = [
  {
    id: "call",
    title: "Start Call Session",
    subtitle: "5 leads waiting",
    href: "/calls",
    bgVar: "bg-[var(--qa-call-bg)]",
  },
  {
    id: "docs",
    title: "Check Documents",
    subtitle: "3 pending review",
    href: "/documents",
    bgVar: " bg-[var(--qa-docs-bg)] ",
  },
];

function QuickActions() {
  return (
    <div className="space-y-3">
      {actions.map((a) => (
        <Link
          key={a.id}
          href={a.href}
          className={`"
            block rounded-xl border p-5 transition-colors
            ${a.bgVar} hover:opacity-90 
            "`}
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="font-medium">{a.title}</div>
              <div className="text-sm text-muted-foreground">{a.subtitle}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default QuickActions;
