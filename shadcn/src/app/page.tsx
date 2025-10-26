import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChar";
import AppCalender from "@/components/AppCalender";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/Todo";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progresBars";
import { Acheivmentbar } from "@/components/ui/progresBars";
import QuickActions from "@/components/ui/quickActons";
import { EggFried } from "lucide-react";
const homepage = () => {
  return (
    <div className="grid grid-cols-2 lg:gridcols-4 xl:grid-cols-3 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <CardList title="What Needs Your Attention Today" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg grid grid-rows-1">
        <ProgressBar title="Weekly Goals" />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <Acheivmentbar title="Todays Achievements" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <QuickActions />
      </div>
    </div>
  );
};

export default homepage;
