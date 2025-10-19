import ClientCard from "@/components/ClientCard";
import { Button } from "@/components/ui/button";
import { DropdownDate } from "@/components/ui/DropdownDate";
import { mock_clients, mock_lead_activity_1 } from "@/data/clientMock";
import { Metadata } from "next";
import Image from "next/image";
import { mock } from "node:test";
import { selectRealScaleType } from "recharts/types/state/selectors/axisSelectors";

export const metadata: Metadata = {
  title: "Call Intelligence Dashboard",
  description: "Broker Call Analysis - Powered by AI",
};

const homepage = () => {
  const totalCalls = mock_clients.length;

  const applications = mock_clients.filter(
    (type) => type.leadActivity.type === "application_started"
  ).length;

  const handledObjections = (() => {
    let totalObjections = 0;
    let handledObjections = 0;
    mock_clients.forEach((x) => {
      const objections = x.lead.objectionsAndResponses || [];
      objections.forEach((o) => {
        totalObjections++;
        if (o.response && o.response.trim().length > 0) {
          handledObjections++;
        }
      });
    });
    return totalObjections === 0
      ? 100 
      : Math.round(handledObjections / totalObjections) * 100 ;
  })();

  const crossSells = mock_clients.reduce((sells, x) => sells + (x.lead.crossSellOpportunities?.length || 0), 0)

  console.log(crossSells);
  const highUrgencies =
    mock_clients.filter((x) => x.lead.urgency === "high").length || 0;

  return (
    // PAGE CONTAINER
    <div className="">
      {/* TOP TITLE DIV */}
      <div className="flex items-center justify-between pr-4 pl-4 border-b">
        <div className="pb-4">
          <h1 className="font-semibold text-3xl">
            Call Intelligence Dashboard
          </h1>
          <h4 className="text-gray-500 text-sm">
            AI-powered analysis of your calls
          </h4>
        </div>
        <div className="flex items-center gap-3">
          {/* DROPDOWN DATE SHIT */}
          <div>
            <DropdownDate />
          </div>
          {/* CALL BUTTON */}
          <div>
            <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 cursor-pointer">
              <Image
                className="invert"
                src="/phone.svg"
                alt="phone"
                width={10}
                height={10}
              />
              Start Calling
            </Button>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 border-b">
        <div className="grid grid-cols-6 gap-6">
          <div>
            <h1 className="text-3xl font-bold">{totalCalls}</h1>
            <h4 className="text-gray-500 text-sm">Total Calls</h4>
          </div>
          {/* add function to count number of calls where client picked up -> waiting for tables */}
          <div>
            <h1 className="text-3xl font-bold text-green-600">2</h1>
            <h4 className="text-gray-500 text-sm">Connected</h4>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-600">{applications}</h1>
            <h4 className="text-gray-500 text-sm">Applications</h4>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-purple-600">
              {handledObjections}%
            </h1>
            <h4 className="text-gray-500 text-sm">Objections Handled</h4>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-orange-600">{crossSells}</h1>
            <h4 className="text-gray-500 text-sm">Cross-sells Found</h4>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-red-600">{highUrgencies}</h1>
            <h4 className="text-gray-500 text-sm">High Urgency</h4>
          </div>
        </div>
      </div>
      {/* CALL CARDS */}
      <div className="p-6">
        <div className="items-center ">
          {mock_clients.map((dataSet, index) => (
            <div key={index} className="mt-5 mb-5">
              <ClientCard
                client={dataSet.client}
                callRecord={dataSet.callRecord}
                lead={dataSet.lead}
                leadActivity={dataSet.leadActivity}
                callStrengths={dataSet.callStrengths}
                clientProfile={dataSet.clientProfile}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default homepage;
