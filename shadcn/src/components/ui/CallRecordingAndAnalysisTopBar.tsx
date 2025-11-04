import { Button } from "./button";
import { Calendar, Clock, Phone } from "lucide-react";

export function CallRecordingAndAnalysisTopBar() {
  return (
    <div className="flex-1 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          {/* LEFT SIDE: Title + Details */}
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-2">Call Recording And Analysis</h2>

            {/* Details Row */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                October 27, 2025
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10:32 AM
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                18:52
              </p>
              <p>Agent: Nav Cheema</p>
              <p>Contact: Sarah Johnson</p>
            </div>
          </div>

          {/* RIGHT SIDE: Buttons */}
          <div className="flex gap-3 items-stretch order-last">
            <Button className="flex items-center bg-[var(--Custom-color)] gap-3 text-white">
              Download Recording
            </Button>
            <Button className="items-center bg-[var(--textmssg)] text-white">
              Add to Training Library
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

