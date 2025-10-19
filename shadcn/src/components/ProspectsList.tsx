import { useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import PriorityBadge from "@/components/PriorityBadge";

import { mockLeads } from "@/data/mockLeads";
import { urgencyToPriority, getTimeAgo } from "@/utils/clientHelpers";



const ProspectsList = () => {
    const [ filter, setFilter ] = useState<"all" | "hot" | "warm" | "cold">("all");
    
    const filteredLeads = mockLeads.filter((lead) => {

        if (filter === "all") return true;

        const priority = urgencyToPriority(lead.urgency);
        return priority === filter;
    });
    
    const prioCounts = {
        hot: mockLeads.filter(lead => urgencyToPriority(lead.urgency) === "hot").length,
        warm: mockLeads.filter(lead => urgencyToPriority(lead.urgency) === "warm").length,
        cold: mockLeads.filter(lead => urgencyToPriority(lead.urgency) === "cold").length,
    }

    return (
        <div className="bg-card rounded-xl border overflow-hidden">
        <div className="p-4 border-b">
            <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Priority Prospects</h3>
            
            <div className="flex gap-2">
                <Button
                variant={filter === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("all")}
                >
                All ({mockLeads.length})
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

        <div className="divide-y">
            {filteredLeads.map((lead) => {
          // Get data for this client
          const priority = urgencyToPriority(lead.urgency);
          
          return (
            <div 
              key={lead.id}
              className="p-4 hover:bg-muted/50 transition-colors"
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
                    <span className="font-medium text-green-600">
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
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => console.log("Calling:", lead.client.phone)}
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => console.log("Messaging:", lead.client.email)}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
            </div>
            )};

export default ProspectsList