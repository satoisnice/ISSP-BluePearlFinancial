import { CallRecord, Client } from "@/types/types";
import { mock_call_1 } from "@/data/clientMock";

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
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
