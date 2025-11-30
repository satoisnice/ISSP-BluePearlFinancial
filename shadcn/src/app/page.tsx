// import AppAreaChart from "../components/AppAreaChart";
import AppCalender from "../components/AppCalender";
// import AppPieChart from "../components/AppPieChart";
import ClientCard from "../components/ClientCard";
import { Button } from "../components/ui/button";
import { ProgressBar } from "../components/ui/progresBars";
import { Acheivmentbar } from "../components/ui/progresBars";
import QuickActions from "../components/ui/quickActons";
import { mock_clients } from "../data/clientMock"
import { ScrollArea } from "@/components/ui/scroll-area";

const homepage = () => {
  const priorityClients = mock_clients.slice(0, 3)
  return (
    
    <div className="grid grid-cols-2 lg:gridcols-4 xl:grid-cols-3 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 border">
        <h1 className="text-lg font-bold mb-4">What Needs Your Attention Today</h1>

          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-4">
              {priorityClients.map((data, index) => (
                <ClientCard key={index}
                client={data.client}
                callRecord={data.callRecord}
                lead={data.lead}
                leadActivity={data.leadActivity}
                callStrengths={data.callStrengths}
                clientProfile={data.clientProfile}
              />
              ))}

            </div>
          </ScrollArea>

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
