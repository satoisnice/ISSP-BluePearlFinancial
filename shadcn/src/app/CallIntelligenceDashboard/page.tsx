import CardList from "@/components/CardList";
import ClientCard from "@/components/ClientCard";
import { Button } from "@/components/ui/button";
import { DropdownDate } from "@/components/ui/DropdownDate";
import {
  mock_call_1,
  mock_call_strength_1,
  mock_client_1,
  mock_lead_1,
  mock_lead_activity_1,
} from "@/data/clientMock";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Call Intelligence Dashboard",
  description: "Broker Call Analysis - Powered by AI",
};

const homepage = () => {
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
            <h1 className="text-3xl font-bold">3</h1>
            <h4 className="text-gray-500 text-sm">Total Calls</h4>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-green-600">2</h1>
            <h4 className="text-gray-500 text-sm">Connected</h4>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-600">1</h1>
            <h4 className="text-gray-500 text-sm">Applications</h4>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-purple-600">85%</h1>
            <h4 className="text-gray-500 text-sm">Objections Handled</h4>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-orange-600">4</h1>
            <h4 className="text-gray-500 text-sm">Cross-sells Found</h4>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-red-600">1</h1>
            <h4 className="text-gray-500 text-sm">High Urgency</h4>
          </div>
        </div>
      </div>
      {/* CALL CARDS */}
      <div className="p-6">
        <div className="items-center ">
          <div className="mt-5 mb-5">
            <ClientCard
              client={mock_client_1}
              callRecord={mock_call_1}
              lead={mock_lead_1}
              leadActivity={mock_lead_activity_1}
              callStrength={mock_call_strength_1}
            />
          </div>
          <div className="mt-5 mb-5">
            <ClientCard
              client={mock_client_1}
              callRecord={mock_call_1}
              lead={mock_lead_1}
              leadActivity={mock_lead_activity_1}
              callStrength={mock_call_strength_1}
            />
          </div>
          <div className="mt-5 mb-5">
            <ClientCard
              client={mock_client_1}
              callRecord={mock_call_1}
              lead={mock_lead_1}
              leadActivity={mock_lead_activity_1}
              callStrength={mock_call_strength_1}
            />
          </div>
          {/* <CardList title="sup"/> */}
        </div>
      </div>
    </div>
  );
};

export default homepage;
