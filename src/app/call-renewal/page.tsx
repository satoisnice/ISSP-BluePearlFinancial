"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { latestTransactions } from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

/* HELPER FUNCTION TO SET THE STATUS OF RENEWAL STATE (RED IF OVERDUE YELLOW IF DUE ETC) */
const getStatusStyles = (status: string): string => {
  const styles: Record<string, string> = {
    overdue: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
    due: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  };
  return styles[status] || styles.default;
};

const getStatusText = (status: string, daysOverdue?: number): string => {
  return status === "overdue" ? `${daysOverdue} Days Overdue` : "Due Soon";
};

const CallRenewalPage = () => {
  const router = useRouter();
  const clientData = latestTransactions[2];

  const profile = {
    id: 1,
    clientName: "Michael Johnson",
    phone: "(555) 123-4567",
    email: "michael.johnson@email.com",
    profileImage: clientData.image,
    currentMortgage: "$580,000",
    status: "overdue",
    daysOverdue: 2,
    priority: "High",
    rate: "5.25%",
    mortgageType: "Fixed Rate",
    lender: "TD Bank",
    property: "123 Oak Street, Toronto, ON",
  };

  const quickActions = [
    {
      label: "Generate Renewal Proposal",
      route: "/renewal/proposal",
    },
    {
      label: "Run New Scenarios",
      route: "/renewal/scenarios",
    },
    {
      label: "Schedule Meeting",
      route: "/renewal/schedule",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* CLIENT INFO HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.back()}
            className="dark:border-gray-700"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Renewal Profile
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* LEFT COLUMN - MAIN INFO */}
          <div className="col-span-2 space-y-6">
            <Card className="bg-primary-foreground dark:bg-gray-800 border-0 shadow-sm transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full relative overflow-hidden flex-shrink-0">
                      <Image
                        src={profile.profileImage}
                        alt={profile.clientName}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {profile.clientName}
                        </h2>
                        <Badge className={getStatusStyles(profile.status)}>
                          {getStatusText(profile.status, profile.daysOverdue)}
                        </Badge>
                        <Badge className="bg-red-500 text-white dark:bg-red-700">
                          {profile.priority.charAt(0).toUpperCase() +
                            profile.priority.slice(1)}{" "}
                          Priority
                        </Badge>
                      </div>
                      <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <span>{profile.phone}</span>
                        <span>•</span>
                        <span>{profile.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-green-600 hover:bg-green-700 gap-2 text-white">
                      <Phone /> Call Now
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2 dark:border-gray-700 dark:text-gray-200"
                    >
                      <MessageSquare /> Message
                    </Button>
                  </div>
                </div>

                <Separator className="my-4 dark:bg-gray-700" />

                {/* MORTGAGE DETAILS */}
                <div className="grid grid-cols-2 gap-4 text-gray-800 dark:text-gray-100">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Current Mortgage
                    </p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {profile.currentMortgage}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Current Rate
                    </p>
                    <p className="text-2xl font-bold">{profile.rate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Mortgage Type
                    </p>
                    <p className="font-semibold">{profile.mortgageType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Lender
                    </p>
                    <p className="font-semibold">{profile.lender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Property
                    </p>
                    <p className="font-semibold text-sm">{profile.property}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN - OPPORTUNITY THEN QUICK ACTIONS */}
          <div className="space-y-6">
            {/* PRIMARY OPPORTUNITY CARD */}
            <Card className="border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-blue-700 dark:text-blue-300 text-lg font-semibold">
                    🎯 Primary Opportunity
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mt-2">
                  Mortgage Renewal
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-300">
                  Blend and extend to lock in before rates rise
                </p>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-gray-700">
                  <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                    Potential Savings:
                  </p>
                  <p className="text-lg font-bold text-blue-800 dark:text-blue-200">
                    ~$180/month vs current rate environment
                  </p>
                </div>

                <div className="p-2 rounded-md bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 flex items-center gap-2">
                  <span className="text-red-600 dark:text-red-300 text-sm font-medium">
                    ⚠️ High - rates expected to increase
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* QUICK ACTIONS BELOW */}
            <Card className="bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action) => (
                  <Button
                    key={action.label}
                    variant="ghost"
                    onClick={() => router.push(action.route)}
                    className="w-full flex justify-between items-center border border-gray-200 dark:border-gray-700 rounded-lg py-5 text-lg font-medium bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors duration-300"
                  >
                    {action.label}
                    <ArrowRight className="w-4 h-4 text-gray-500 dark:text-gray-300" />
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ADDITIONAL SECTIONS BELOW */}
        <div className="mt-10 text-gray-900 dark:text-gray-100">
          CLIENT RENEWAL HISTORY/TIMELINE
        </div>
        <div className="">INTERACTION HISTORY</div>
        <div className="">GRAPHS/METRICS</div>
      </div>
    </div>
  );
};

export default CallRenewalPage;