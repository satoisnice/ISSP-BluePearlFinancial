import Link from "next/link";
import * as React from "react";

type Pipeline = {
  title: string;
  subtitle: number;
  href: string;
  count: number;
};

const actions: Pipeline[] = [
  {
    title: "Application",
    subtitle: 680000,
    href: "/calls",
    count: 8,
  },
  {
    title: "Processing",
    subtitle: 425000,
    href: "/documents",
    count: 5,
  },
  {
    title: "Underwriting",
    subtitle: 720000,
    href: "/documents",
    count: 6,
  },
  {
    title: "Appraisal",
    subtitle: 285000,
    href: "/documents",
    count: 2,
  },
  {
    title: "Ready To Fund",
    subtitle: 340000,
    href: "/documents",
    count: 10,
  },
];
const formatMoney = (value: number) => {
  const thousands = Math.round(value / 1000);
  return `$${thousands}k`;
};
function PipelineCards() {
  return (
    <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {actions.map((a, i) => (
        <Link
          key={`${a.href}-${i}`} // ← unique even when href repeats
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
                {formatMoney(a.subtitle)}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PipelineCards;
