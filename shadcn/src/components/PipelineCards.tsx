import Link from "next/link";
import * as React from "react";
import type { PipelineItem } from "@/data/mockpipeline";
import mockPipeline from "@/data/mockPipeline";

type PipelineCardsProps = {
  title?: string;
  items?: PipelineItem[];
};

const formatMoney = (value: number) => {
  const thousands = Math.round(value / 1_000);
  return `$${thousands}k`;
};

const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

export default function PipelineCards({
  title = "Pipeline",
  items = mockPipeline,
}: PipelineCardsProps) {
  return (
    <div>
      {title && <h2 className="mb-2 text-lg font-bold">{title}</h2>}
      <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((a) => (
          <Link
            key={`${a.href}-${slug(a.title)}`}
            href={a.href}
            className="block rounded-xl border p-5 transition-colors bg-[var(--qa-bg)] hover:opacity-90"
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="leading-tight">
                <div className="text-3xl sm:text-4xl font-extrabold text-[color:var(--qa-color)]">
                  {a.count}
                </div>
                <div className="font-medium text-[color:var(--qa-color)]">
                  {a.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {formatMoney(a.totalAmount)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
