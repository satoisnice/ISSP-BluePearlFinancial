"use client";

import Link from "next/link";
import * as React from "react";
import { actions } from "@/data/mockQuickActions";
function QuickActions() {
  return (
    <div className="space-y-3">
      {actions.map((a) => (
        <Link
          key={a.id}
          href={a.href}
          style={
            {
              "--qa-bg": `var(${a.bgVar})`,
            } as React.CSSProperties
          }
          className="
            block rounded-xl border p-5 transition-colors
            bg-[var(--qa-bg)] hover:opacity-90
            "
        >
          <div className="flex items-start justify-between">
            <div className="leading-tight">
              <div className="font-medium text-[color:var(--qa-color)]">
                {a.title}
              </div>
              <div className="text-sm text-muted-foreground">{a.subtitle}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default QuickActions;
