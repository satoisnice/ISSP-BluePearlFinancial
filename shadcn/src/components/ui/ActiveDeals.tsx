import { MessageSquare, Phone } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardTitle } from "./card";
import { ScrollArea } from "./scroll-area";
import { mockActiveDeals } from "@/data/mockActiveDeals";

const formatMoney = (value: number) => {
  const thousands = Math.round(value / 1000);
  return `$${thousands}k`;
};
const STAGE_CLASS: { [key: string]: string } = {
  Application: "stage-application",
  Processing: "stage-processing",
  Underwriting: "stage-underwriting",
  Appraisal: "stage-appraisal",
  "Ready To Fund": "stage-readytofund",
};
const ACTION_CLASS: { [key: string]: string } = {
  "Submit to lender": "action-submit",
  "submit to lender": "action-submit",
  "Prepare Docs": "action-prepare",
  "prepare docs": "action-prepare",
  "chase underwriter": "action-chase",
  "Chase underwriter": "action-chase",
  "schedule appraisal": "action-appraise",
  "Schedule appraisal": "action-appraise",
};
export default function ActiveDeals() {
  const cols =
    "grid grid-cols-[1.6fr_1fr_1.6fr_1.2fr_1fr_1.8fr_0.8fr] items-center";

  return (
    <div className="rounded-lg border overflow-hidden">
      <div
        className={`${cols} px-4 py-3 text-sm font-medium text-muted-foreground bg-muted/40`}
      >
        <div>Client</div>
        <div>Amount</div>
        <div>Property</div>
        <div>Stage</div>
        <div>Days Active</div>
        <div>Next Action</div>
        <div className="text-right pr-2">Actions</div>
      </div>
      <ScrollArea className="h-[300px] mt-2 ">
        <div className="divide-y">
          {mockActiveDeals.map((a) => (
            <div key={a.id} className={`${cols} px-4 py-4`}>
              <div className="font-medium">{a.client}</div>

              <div className="font-semibold text-[var(--Custom-color)]">
                {formatMoney(a.amount)}
              </div>

              <div className="text-muted-foreground">{a.property}</div>

              <div>
                <span
                  className={[
                    "stage-pill",
                    STAGE_CLASS[a.stage] ?? "stage-application",
                    "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
                    "bg-[var(--pill-bg)] text-[color:var(--pill-fg)] ring-1 ring-[color:var(--pill-ring)]",
                  ].join(" ")}
                >
                  {a.stage}
                </span>
              </div>

              <div className="text-muted-foreground">{a.days} days</div>

              <div className="flex items-center gap-2">
                <span
                  className={[
                    "action-dot",
                    ACTION_CLASS[a.nextAction ?? ""] ?? "action-default",
                    "inline-block h-2.5 w-2.5 rounded-full bg-[var(--dot)]",
                  ].join(" ")}
                />
                <span className="text-muted-foreground">
                  {a.nextAction ?? "Submit to lender"}
                </span>
              </div>

              <div className="flex items-center justify-end gap-4 pr-2">
                <Button
                  variant="default"
                  size="icon"
                  className="border-[var(--Custom-color)] 
             bg-[var(--Custom-color)] hover:bg-[var(--Custom-color)] hover:text-white
             focus-visible:ring-[var(--Custom-color)]"
                >
                  <Phone className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
                <Button
                  variant="default"
                  size="icon"
                  className="border-[var(--textmssg)] 
             bg-[var(--textmssg)] hover:bg-[var(--textmssg)] hover:text-white
             focus-visible:ring-[var(--textmssg)]"
                >
                  <MessageSquare className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
