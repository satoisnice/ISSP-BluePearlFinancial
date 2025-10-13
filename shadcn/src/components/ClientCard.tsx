"use client";

import { CallRecord, Client } from "@/types/types";
import { lightFormat } from "date-fns";
import {
  ArrowBigRight,
  ArrowBigRightIcon,
  ChevronDown,
  PhoneCall,
  Play,
  Sparkles,
  Target,
} from "lucide-react";
import { useState } from "react";

interface Props {
  client: Client;
  callRecord: CallRecord;
}

const ClientCard = ({ client, callRecord }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const urgencyColors = {
    high: "text-red-600 bg-red-100",
    medium: "text-yellow-600 bg-yellow-100",
    low: "text-green-600 bg-green-100",
  };

  const urgencyLabel = {
    high: "high urgency",
    medium: "medium urgency",
    low: "low urgency",
  };

  return (
    // CARD CONTAINER
    <div
      onClick={() => setExpanded(!expanded)}
      className="rounded-lg border border-gray-200 hover:shadow-md transition-all overflow-hidden cursor-pointer"
    >
      <div className="p-4 hover:bg-gray-50">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {/* SVG DEPENDENT ON STATE OF ? */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
              <PhoneCall height={24} width={24} className="text-[#2563eb]" />
            </div>
            {/* CARD HEADER */}
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-semibold">{client.name}</h3>
                {callRecord.urgencyLevel && (
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      urgencyColors[callRecord.urgencyLevel]
                    }`}
                  >
                    {urgencyLabel[callRecord.urgencyLevel]}
                  </span>
                )}
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
              <Sparkles className="w-3 h-3" />
              {/* what determines cross sell? */}2 Cross-Sell
            </span>
            <ChevronDown
              className={`cursor-pointer w-3 h-3 text-gray-400 transform transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            />
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
          <button
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <Play className="w-3 h-3" />
            Play Recording
          </button>
        </div>
        {/* EXPANDED DETAILS */}
        <div
          className={`${
            expanded ? "block" : "hidden"
          } border-t border-gray-200 p-4 bg-gray-50`}
        >
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-4"></div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-gray-600" />
                  Key Discussion Points
                </h4>
                <ul className="space-y-1">
                  {callRecord.keyPoints.map((point, index) => (
                    <li className="flex items-start gap-2 text-sm" key={index}>
                      <ArrowBigRight className="w-4 h-4 text-green-600 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-purple-700"/>
                  Cross-sell Opportunities
                </h4>
                <div className="space-y-2">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                    <div className="font-medium text-purple-900">Placeholder Company</div>
                    <div className="text-sm text-purple-700 mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nobis debitis commodi, quas atque ipsam aspernatur beatae, adipisci maiores assumenda nemo rem aliquid maxime explicabo reprehenderit, tempore minus temporibus accusantium.</div>
                    <button className="text-xs text-purple-600 hover:text-purple-700 mt-2">Add to pipeline</button>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
