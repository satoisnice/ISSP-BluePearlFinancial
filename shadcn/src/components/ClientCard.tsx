import { CallRecord, Client } from "@/types/types";
import { mock_call_1 } from "@/data/clientMock";
import Image from "next/image";

interface Props {
  client: Client;
  callRecord: CallRecord;
}

const ClientCard = ({ client, callRecord }: Props) => {
  return (
    // CARD CONTAINER
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 hover:bg-gray-50 cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {/* SVG DEPENDENT ON STATE OF ? */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2563eb"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                <path d="M14.05 6A5 5 0 0 1 18 10"></path>
              </svg>
            </div>
            {/* CARD HEADER */}
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-semibold">{client.name}</h3>
                {callRecord.urgencyLevel === "high" ? (
                  <span className="px-2 py-1 rounded-full text-xs font-medium text-red-600 bg-red-100">
                    {}High Urgency
                  </span>
                ) : callRecord.urgencyLevel === "medium" ? (
                  <span className="px-2 py-1 rounded-full text-xs font-medium text-yellow-600 bg-yellow-100">
                    medium urgency
                  </span>
                ) : callRecord.urgencyLevel === "low" ? (
                  <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100">
                    Low urgency
                  </span>
                ) : null}
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100">
                  {callRecord.nextSteps}
                </span>
              </div>
              {/* info */}
              <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                <span className="">{client.phone}</span>
                <span className="">•</span>
                <span className="">{client.lastContactDate}</span>
                <span className="">•</span>
                <span className="">{callRecord.duration}</span>
                <span className="">•</span>
                <span className="">{client.mortgageAmount}</span>
              </div>
              <p className="text-sm text-gray-700 mt-2">{callRecord.summary}</p>
            </div>
          </div>
          {/* CROSS SELL  */}
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-sparkles w-3 h-3"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              {/* what determines cross sell? */}2 Cross-Sell
            </span>
          </div>
        </div>
        {/* NEXT SECTION W PLAY RECORDING BUTTON */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Next:</span>
            <span className="text-sm font-medium text-gray-900">
              What should go here? Del later
            </span>
            <span className="text-sm font-medium text-gray-900">
              {callRecord.nextSteps}
            </span>
            <span className="whitespace-pre text-sm text-gray-500">
              • Due: {callRecord.followUpDate}
            </span>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-play w-3 h-3"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon>
            </svg>
            Play Recording
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
