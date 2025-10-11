import { Client } from "@/types/types";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Props {
    client: Client
}

const ClientCard = ({client}: Props) => {
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
                    name should b
                    <h3 className="font-semibold text-gray-900">{client.name}</h3>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100">High Urgency</span>
                </div>
                <div></div>
                <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
