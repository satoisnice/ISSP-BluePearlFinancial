"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";

export function DropdownDate() {
  const [range, setRange] = useState("Today");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        <Button className="px-4 py-2 border border-gray-300 rounded-lg cursor-pointer">{range}</Button>
      </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer" onClick={()=> setRange("Today")}>Today</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" onClick={()=> setRange("This Week")}>This Week</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" onClick={()=> setRange("This Month")}>This Month</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
}
