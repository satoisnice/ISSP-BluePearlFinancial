"use client";
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button";
import { Phone, Zap, Users, RotateCw, TrendingUp } from "lucide-react";
import ProspectsList from "@/components/ProspectsList";

const Prospecting = () => {
    return (
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Prospecting Center</h2>
                <p>Converts leads into applications</p>
              </div>
              <div className="flex gap-3 items-stretch order-last">
              <Button className="flex items-center bg-purple-700 gap-3">
                <Zap/>
                Auto-Dialer
                </Button>
              <Button className="items-center bg-green-500 gap-3">
                <Phone/>
                Start Session
                </Button>
              </div>
            </div>

          <div className="grid grid-cols-4 gap-3 mb-3">
            <div className="bg-primary-foreground rounded-lg p-4 border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">New Leads</p>
                  <p className="text-2xl font-bold">"A Number"</p>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-primary-foreground">
                  <Users className="w-5 h-5"/>
                </div>
              </div>
              <div className="">"For Later"</div>
            </div>
            <div className="bg-primary-foreground rounded-lg p-4 border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Follow ups</p>
                  <p className="text-2xl font-bold">"A Number"</p>
                </div>

                <div className="w-10 h-10 bg-yellow-200 rounded-lg flex items-center justify-center text-primary-foreground">
                  <RotateCw className="w-5 h-5"/>
                </div>
              </div>
              <div className="">"For Later"</div>
            </div>

            <div className="bg-primary-foreground rounded-lg p-4 border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Conversion Rates</p>
                  <p className="text-2xl font-bold">"A Number"</p>
                </div>
                <div className="w-10 h-10 bg-red-400 rounded-lg flex items-center justify-center text-primary-foreground">
                  <TrendingUp className="w-5 h-5"/>
                </div>
              </div>
              <div className="">"For Later"</div>
            </div>

            <div className="bg-primary-foreground rounded-lg p-4 border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Calls Today</p>
                  <p className="text-2xl font-bold">"A Number"</p>
                </div>
                <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center text-primary-foreground">
                  <RotateCw className="w-5 h-5"/>
                </div>
              </div>
              <div className="">"For Later"</div>
            </div>
          </div>


          <div className="grid grid-cols-2 lg:gridcols-4 xl:grid-cols-3 gap-4 ">
            <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 ">
              <div className="space-y-4">
                <ProspectsList />
              </div>
            </div>


            <div className="space-y-4">
                  <div className="bg-primary-foreground rounded-xl p-4 border border-gray-200">
                    <h3 className="font-semibold mb-3">Call Scripts</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left p-3 rounded-lg hover:bg-primary-foreground transition-colors">
                        <div className="font-medium text-sm">First Contact</div>
                        <div className="text-xs">Introduction & qualification</div>
                      </button>
                      <button className="w-full text-left p-3 rounded-lg hover:bg-primary-foreground transition-colors">
                        <div className="font-medium text-sm">Follow-up</div>
                        <div className="text-xs">Rate discussion & next steps</div>
                      </button>
                      <button className="w-full text-left p-3 rounded-lg hover:bg-primary-foreground transition-colors">
                        <div className="font-medium text-sm">Objection Handling</div>
                        <div className="text-xs">Rate shopping responses</div>
                      </button>
                    </div>
                  </div>

                  <div className="bg-primary-foreground rounded-xl p-4 border-gray-200">
                    <h3 className="font-semibold mb-2">Today's Challenge</h3>
                    <p className="text-sm opacity-90 mb-3">Test for now</p>
                    <div className="w-full bg-primary-foreground rounded-full h-2 mb-2">
                      <Progress value={33} />
                    </div>
                  </div>
            </div>
          </div>
        </div>    
      </div>
    );
};

export default Prospecting;