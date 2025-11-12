"use client";

import { mock_call_strength_1 } from "@/data/clientMock";
import {
  CallRecord,
  CallStrength,
  Client,
  ClientProfile,
  Lead,
  LeadActvity,
} from "@/types/types";
import { lightFormat } from "date-fns";
import {
  AlertCircle,
  ArrowBigRight,
  ArrowBigRightIcon,
  ArrowRight,
  BarChart3,
  Building,
  Check,
  CheckCircle,
  ChevronDown,
  DollarSign,
  Dot,
  Heart,
  House,
  PhoneCall,
  Play,
  Sparkles,
  Speech,
  Target,
  TriangleAlert,
  User,
} from "lucide-react";
import { useState } from "react";

interface Props {
  client: Client;
  callRecord: CallRecord;
  lead: Lead;
  leadActivity: LeadActvity;
  callStrengths: CallStrength[];
  clientProfile: ClientProfile;
}

const ClientCard = ({
  client,
  callRecord,
  lead,
  leadActivity,
  callStrengths,
  clientProfile,
}: Props) => {
  // console.log("callstrewngths prop:", callStrengths);
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

  const { employment, family, goals } = clientProfile;

  return (
    // CARD CONTAINER
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <div
        onClick={() => setExpanded(!expanded)}
        className="p-4 hover:bg-gray-50 hover:shadow-md transition-all overflow-hidden cursor-pointer"
      >
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
                {lead.urgency && (
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      urgencyColors[lead.urgency]
                    }`}
                  >
                    {urgencyLabel[lead.urgency]}
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
              {lead.crossSellOpportunities?.length} Cross-Sell
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
              {callRecord.nextSteps}
            </span>
            {callRecord.followUpDate && (
              <span className="whitespace-pre text-sm text-gray-500">
                • Due: {callRecord.followUpDate}
              </span>
            )}
          </div>
          {callRecord && (
            <button
              onClick={(e) => e.stopPropagation()}
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              <Play className="w-3 h-3" />
              Play Recording
            </button>
          )}
        </div>
      </div>
      {/* EXPANDED DETAILS */}
      <div
        className={`${
          expanded ? "block" : "hidden"
        } border-t border-gray-200 p-4 bg-gray-50`}
      >
        <div className="grid grid-cols-3 gap-6">
          {/* left column */}
          <div className="space-y-4">
            {/* property details */}
            <div>
              {lead.propertyDetails && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <House className="w-4 h-4 text-gray-600" />
                    Property Details
                  </h4>
                  <div className="bg-white rounded-lg p-3 space-y-1 text-sm">
                    <div>
                      <span className="text-gray-600 pre">Value: </span>
                      <span className="font-medium">
                        {lead.propertyDetails.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 pre">Type: </span>
                      <span className="font-medium">
                        {lead.propertyDetails.value}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 pre">Location: </span>
                      <span className="font-medium">
                        {lead.propertyDetails.location}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* client profile */}
            <div>
              {(employment || family || goals) && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-600" />
                    Client Profile
                  </h4>

                  <div className="bg-white rounded-lg p-3 space-y-1 text-sm">
                    {employment && (
                      <div>
                        <span className="text-gray-600 pre">Employment: </span>
                        <span className="font-medium">{employment}</span>
                      </div>
                    )}
                    {family && (
                      <div>
                        <span className="text-gray-600 pre">Family: </span>
                        <span className="font-medium">{family}</span>
                      </div>
                    )}
                    {goals && (
                      <div>
                        <span className="text-gray-600 pre">Goals: </span>
                        <span className="font-medium">{goals}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* life events */}
            <div>
              {lead.lifeEvents && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-gray-600" />
                    Life Events
                  </h4>
                  <div className="bg-white rounded-lg p-3 space-y-1">
                    <ul className="space-y-1">
                      {lead.lifeEvents.map((event, index) => (
                        <li
                          className="flex items-start gap-2 text-sm"
                          key={index}
                        >
                          <Dot className="w-4 h-4 text-purple-600 mt-0.5" />
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* middle column */}
          <div className="space-y-4">
            {/* Key Points */}
            <div>
              {callRecord.keyPoints && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-gray-600" />
                    Key Discussion Points
                  </h4>
                  <div className="bg-white rounded-lg p-3 space-y-1">
                    <ul className="space-y-1">
                      {callRecord.keyPoints.map((point, index) => (
                        <li
                          className="flex items-start gap-2 text-sm"
                          key={index}
                        >
                          <ArrowBigRight className="w-4 h-4 text-green-600 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            {/* objection and responses */}
            <div>
              {lead.objectionsAndResponses && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-gray-600" />
                    Objections & Responses
                  </h4>
                  <div className="space-y-2">
                    {lead.objectionsAndResponses.map(
                      ({ objection, response, timestamp }, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-3 text-sm"
                        >
                          <div className="text-red-700 font-medium">
                            {objection}
                          </div>
                          <div className="flex items-start gap-2 text-green-700 mt-1">
                            <Speech className="h-4 w-4 mt-0.5" />
                            <span>{response}</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            [{timestamp[0]}] → [{timestamp[1]}]
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* call strneghts */}
            <div>
              {callStrengths?.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                    Call Strengths
                  </h4>
                  <div className="space-y-2">
                    <div className="bg-green-50 rounded-lg p-3 space-y-1">
                      {callStrengths.map(({ note, timestamp }, index) => (
                        <div
                          key={index}
                          className="text-sm flex items-start gap-2"
                        >
                          <span className="text-green-600">✓</span>
                          <span className="pre">
                            {note} [{timestamp}]
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* right column */}
          <div className="space-y-4">
            {/* cross sell */}
            <div>
              {lead.crossSellOpportunities && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-700" />
                    Cross-sell Opportunities
                  </h4>
                  <div className="space-y-2">
                    {lead.crossSellOpportunities.map(
                      ({ type, description }, index) => (
                        <div
                          key={index}
                          className="bg-purple-50 border border-purple-200 rounded-lg p-3"
                        >
                          <div className="font-medium text-purple-900">
                            {type}
                          </div>
                          <div className="text-sm text-purple-700 mt-1">
                            {description}
                          </div>
                          <button className="text-xs text-purple-600 hover:text-purple-700 mt-2 cursor-pointer">
                            Add to pipeline →
                          </button>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* Rate disucssion */}
            <div>
              {lead.rateDiscussion && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-600" />
                    Rate Discussion
                  </h4>
                  <div className="bg-white rounded-lg p-3 space-y-1 text-sm">
                    <div>
                      <span className="text-gray-600 pre">Current: </span>
                      <span className="font-medium">
                        {lead.rateDiscussion.currentRate}%
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 pre">Desired: </span>
                      <span className="font-medium">
                        Under {lead.rateDiscussion.desiredRate}%
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600 pre">
                        Rate Sensitive:{" "}
                      </span>
                      <span
                        className={`font-medium ${
                          lead.rateDiscussion.rateSensitive
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {lead.rateDiscussion.rateSensitive ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* competition */}
            <div>
              {lead.competition && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Building className="w-4 h-4 text-gray-600" />
                    Competition
                  </h4>
                  <div className="bg-yellow-50 rounded-lg p-3 text-sm">
                    {lead.competition.map((competition, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <TriangleAlert className="h-3 w-3 text-yellow-600" />
                        <span>{competition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* call quality */}
            <div>
              {lead.callRecord?.callQuality && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-gray-600" />
                    Call Quality
                  </h4>
                  <div className="bg-white rounded-lg p-3 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sentiment:</span>
                      <span
                        className={`font-medium ${
                          lead.callRecord.callQuality.sentiment === "positive"
                            ? "text-green-600"
                            : ""
                        } ${
                          lead.callRecord.callQuality.sentiment === "negative"
                            ? "text-red-600"
                            : ""
                        }`}
                      >
                        {lead.callRecord.callQuality.sentiment}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Engagement:</span>
                      <span
                        className={`font-medium ${
                          lead.callRecord.callQuality.engagment === "high"
                            ? "text-green-600"
                            : ""
                        } ${
                          lead.callRecord.callQuality.engagment === "low"
                            ? "text-red-600"
                            : ""
                        }`}
                      >
                        {lead.callRecord.callQuality.engagment}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
