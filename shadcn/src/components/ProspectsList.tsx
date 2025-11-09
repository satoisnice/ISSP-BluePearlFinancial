"use client";

import { useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PriorityBadge from "@/components/PriorityBadge";
import { mockLeads } from "@/data/mockLeads";
import { urgencyToPriority, getTimeAgo } from "@/utils/clientHelpers";

const actionPalette = [
  "bg-[color:var(--chart-1)] text-[color:var(--primary-foreground)]",
  "bg-[color:var(--chart-2)] text-[color:var(--primary-foreground)]",
  "bg-[color:var(--chart-3)] text-[color:var(--primary-foreground)]",
  "bg-[color:var(--chart-4)] text-[color:var(--primary-foreground)]",
  "bg-[color:var(--chart-5)] text-[color:var(--primary-foreground)]",
];
const actionColor = (i: number) => actionPalette[i % actionPalette.length];

export default function ProspectsList() {
  const [filter, setFilter] = useState<"all" | "hot" | "warm" | "cold">("all");
  const items = mockLeads;

  const filteredLeads = items.filter((lead) =>
    filter === "all" ? true : urgencyToPriority(lead.urgency) === filter
  );

  const prioCounts = {
    hot: items.filter((l) => urgencyToPriority(l.urgency) === "hot").length,
    warm: items.filter((l) => urgencyToPriority(l.urgency) === "warm").length,
    cold: items.filter((l) => urgencyToPriority(l.urgency) === "cold").length,
  };

  return (
    <div className="bg-card text-card-foreground rounded-xl border border-border overflow-hidden flex flex-col min-h-0">
      <div className="p-4 border-b border-border sticky top-0 z-10 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Priority Prospects</h3>
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All ({items.length})
            </Button>
            <Button
              variant={filter === "hot" ? "destructive" : "ghost"}
              size="sm"
              onClick={() => setFilter("hot")}
            >
              Hot ({prioCounts.hot})
            </Button>
            <Button
              variant={filter === "warm" ? "warm" : "ghost"}
              size="sm"
              onClick={() => setFilter("warm")}
            >
              Warm ({prioCounts.warm})
            </Button>
            <Button
              variant={filter === "cold" ? "cold" : "ghost"}
              size="sm"
              onClick={() => setFilter("cold")}
            >
              Cold ({prioCounts.cold})
            </Button>
          </div>
        </div>
      </div>

      <ScrollArea className="h-[520px]">
        <div className="divide-y divide-border pr-2">
          {filteredLeads.map((lead, i) => {
            const priority = urgencyToPriority(lead.urgency);
            return (
              <div
                key={lead.id}
                className="p-4 hover:bg-muted/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold">{lead.client.name}</h4>
                      <PriorityBadge priority={priority} />
                      <span className="text-xs text-muted-foreground">
                        {getTimeAgo(lead.client.lastContactDate)}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>{lead.client.phone}</span>
                      <span>•</span>
                      {lead.client.source && (
                        <>
                          <span>{lead.client.source}</span>
                          <span>•</span>
                        </>
                      )}
                      <span className="font-medium text-[color:var(--progressgood)]">
                        {lead.client.mortgageAmount || "Amount TBD"}
                      </span>
                    </div>

                    {lead.client.propertyAddress && (
                      <div className="text-sm mb-1">
                        {lead.client.propertyAddress}
                      </div>
                    )}
                    {lead.client.notes && (
                      <div className="text-sm text-muted-foreground">
                        {lead.client.notes}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 ml-4">
                    <Button
                      size="icon"
                      className={`${actionColor(i)} hover:opacity-90`}
                      onClick={() => console.log("Calling:", lead.client.phone)}
                      aria-label="Call client"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      className={`${actionColor(i + 1)} hover:opacity-90`}
                      onClick={() =>
                        console.log("Messaging:", lead.client.email)
                      }
                      aria-label="Message client"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
