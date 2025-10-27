import { ChartColumn, Funnel } from "lucide-react";
import { Button } from "./button";

export function PipelineTopBar() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Active Pipeline</h2>
            <p>Track your Deals From Application to Funding</p>
          </div>
          <div className="flex gap-3 items-stretch order-last">
            <Button className="flex items-center bg-[var(--textmssg)] gap-3">
              <Funnel/>
              Filter
            </Button>
            <Button className="items-center bg-[var(--Custom-color)]">
              <ChartColumn/>
              Analytics
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
