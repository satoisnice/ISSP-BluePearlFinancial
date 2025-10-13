import { Badge } from "@/components/ui/badge";
import { Client } from "@/types/types";

interface PriorityBadgeProps {
    priority: NonNullable<Client["priority"]>
}

import React from 'react'

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
    const variants: Record<string, "destructive" | "secondary" | "outline"> = {
        hot: "destructive",
        warm: "secondary",
        cold: "outline"
    }
  return (
    <Badge variant={variants[priority]} className="capitalize">
        {priority}
    </Badge>
  )
}

export default PriorityBadge