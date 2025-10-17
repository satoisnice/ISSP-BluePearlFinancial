import { Badge } from "@/components/ui/badge";

interface PriorityBadgeProps {
    priority: "hot" | "warm" | "cold"
}

import React from 'react'

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const config = {
    hot: {
      variant: "destructive" as const,
      label: "Hot"
    },
    warm: {
      variant: "warm" as const,
      label: "Warm"
    },
    cold: {
      variant: "cold" as const,
      label: "Cold"
    }
  }
    
    const { variant, label } = config[priority];

  return (
    <Badge variant={variant} className="capitalize">
      {label}
    </Badge>
  );
};

export default PriorityBadge