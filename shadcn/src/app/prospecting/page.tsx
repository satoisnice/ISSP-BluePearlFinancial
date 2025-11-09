"use client";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Phone, Zap, Users, RotateCw, TrendingUp } from "lucide-react";
import ProspectsList from "@/components/ProspectsList";
import Topbar from "@/components/ui/prospectingtopbar";
import ProspectingCards from "@/components/ui/prospectingCards";
import ProspectingSidebar from "@/components/ui/Prospectingquickactions";

const Prospecting = () => {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <Topbar />
        <ProspectingCards />
        <div className="grid grid-cols-2 lg:gridcols-4 xl:grid-cols-3 gap-4 ">
          <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 ">
            <div className="space-y-4">
              <ProspectsList />
            </div>
          </div>
          <ProspectingSidebar />
        </div>
      </div>
    </div>
  );
};

export default Prospecting;
