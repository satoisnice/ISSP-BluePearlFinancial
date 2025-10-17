import { useState } from "react";
import { Phone,  MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import  PriorityBadge from "@/components/PriorityBadge";

import { mockClients } from "@/data/mockClients";
import { mockCallRecords } from "@/data/mockCallRecords";

import { getClientPriority, getLatestCall, getTimeAgo } from "@/utils/clientHelpers";

const ProspectsList = () => {
    const [ filter, setFilter ] = useState<"all" | "hot" | "warm" | "cold">("all");
    
    const filteredClients = mockClients.filter((client) => {

        if (filter === "all") return true;

        const priority = getClientPriority(client, mockCallRecords);
        return priority === filter;
    });
    
    const prioCounts = {
        hot: mockClients.filter(c => getClientPriority(c, mockCallRecords) === "hot").length,
        warm: mockClients.filter(c => getClientPriority(c, mockCallRecords) === "warm").length,
        cold: mockClients.filter(c => getClientPriority(c, mockCallRecords) === "cold").length,
    }

    return (
        <div className="bg-card rounded-xl border overflow-hidden">
        {/* Header with Filter Buttons */}
        <div className="p-4 border-b">
            <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Priority Prospects</h3>
            
            <div className="flex gap-2">
                <Button
                variant={filter === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("all")}
                >
                All ({mockClients.length})
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
            {filteredClients.map((client) => {
          // Get data for this client
          const priority = getClientPriority(client, mockCallRecords);
          const latestCall = getLatestCall(client.id, mockCallRecords);
          
          return (
            <div 
              key={client.id}
              className="p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold">{client.name}</h4>
                    <PriorityBadge priority={priority} />
                    <span className="text-xs text-muted-foreground">
                      {getTimeAgo(client.lastContactDate)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span>{client.phone}</span>
                    <span>•</span>
                    {client.source && (
                      <>
                        <span>{client.source}</span>
                        <span>•</span>
                      </>
                    )}
                    <span className="font-medium text-green-600">
                      {client.mortgageAmount || "Amount TBD"}
                    </span>
                  </div>
                  
                  {client.propertyAddress && (
                    <div className="text-sm mb-1">
                      {client.propertyAddress}
                    </div>
                  )}
                  
                  {/* Latest Call Summary (from AI analysis!) */}
                  {latestCall && (
                    <div className="text-xs text-muted-foreground">
                      {latestCall.summary}
                    </div>
                  )}
                </div>

                {/* Right Side - Action Buttons */}
                <div className="flex gap-2 ml-4">
                  <Button 
                    size="icon" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => console.log("Calling:", client.phone)}
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="icon" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => console.log("Messaging:", client.email)}
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