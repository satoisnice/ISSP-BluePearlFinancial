import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChar";
import AppCalender from "@/components/AppCalender";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import { Button } from "@/components/ui/button";
import { EggFried } from "lucide-react";
const homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:gridcols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <CardList title="Popular Content" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <AppCalender />
      </div>
    </div>
  );
};

export default homepage;
