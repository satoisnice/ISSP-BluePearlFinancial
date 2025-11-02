import Link from "next/link";
import * as React from "react";
import mockPipeline from "@/data/mockPipelinecards";

const palette = [
  "bg-blue-50 text-blue-700",
  "bg-emerald-50 text-emerald-700",
  "bg-violet-50 text-violet-700",
  "bg-amber-50 text-amber-700",
  "bg-rose-50 text-rose-700",
];
const cardColor = (i: number) => palette[i % palette.length];
export default function PipelineCards() {
  const items = mockPipeline;

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold">Pipeline</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((a, i) => (
          <Link
            key={`${a.href}-${a.title}`}
            href={a.href}
            className={`block rounded-xl border p-5 ${cardColor(i)}`}
          >
            <div className="flex flex-col items-center text-center gap-2">
              <div className="text-3xl sm:text-4xl font-extrabold">
                {a.count}
              </div>
              <div className="font-medium">{a.title}</div>
              <div className="text-sm opacity-70">
                ${a.totalAmount.toString()}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
