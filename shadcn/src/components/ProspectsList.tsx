import { Phone,  MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { mockClients } from "@/data/mockData";
import PriorityBadge from "./PriorityBadge";


const ProspectsList = () => {
    const [ filter, setFilter ] = useState<"all" | "hot" | "warm">("all");
    
    const filteredClients = mockClients.filter((client) => {
        if (!client.priority) return false;

        if (filter === "all") return true;
        return client.priority === filter
    })



    return (

        <div className="bg-card rounded-xl border overflow-hidden">
        <div className="p-4 border-b">
            <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Priority Prospects</h3>

                <div className="flex gap-2">
                    <Button
                    variant={filter === "all" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setFilter("all")}>
                            All ({mockClients.length})
                    </Button>
                    
                    <Button
                    variant={filter === "all" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setFilter("hot")}>
                            Hot ({mockClients.filter(c => c.priority === "hot").length})
                    </Button>
                    
                    <Button
                    variant={filter === "all" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setFilter("warm")}>
                            Warm ({mockClients.filter(c => c.priority === "warm").length})
                    </Button>
                </div>
            </div>
        </div>

        <div className="divide-y">
            {filteredClients.map((client) => (
            <div 
                key={client.id} 
                className="p-4 hover:bg-muted/50 transition-colors"
            >
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                    {/* Name, Badge, Time */}
                        <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold">{client.name}</h4>
                        {client.priority && <PriorityBadge priority={client.priority} />}
                        <span className="text-xs text-muted-foreground">
                        {client.lastContactDate}
                        </span>
                    </div>
                    
                    {/* Phone, Source, Amount */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span>{client.phone}</span>
                    <span>•</span>
                    <span>{client.source}</span>
                    <span>•</span>
                    <span className="font-medium text-green-600">
                        {client.mortgageAmount}
                    </span>
                    </div>
                    
                    <div className="text-sm mb-1">
                    {client.propertyAddress}
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                    {client.notes}
                    </div>
                </div>

                <div className="flex gap-2 ml-4">
                    <Button 
                    size="icon" 
                    className="bg-green-600 hover:bg-green-700"
                    >
                    <Phone className="w-4 h-4" />
                    </Button>
                    <Button 
                    size="icon" 
                    className="bg-blue-600 hover:bg-blue-700"
                    >
                    <MessageSquare className="w-4 h-4" />
                    </Button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

export default ProspectsList