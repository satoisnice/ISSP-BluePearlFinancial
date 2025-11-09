import { Phone, Zap } from "lucide-react";
import { Button } from "./button";
function Topbar() {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold">Prospecting Center</h2>
        <p>Converts leads into applications</p>
      </div>
      <div className="flex gap-3 items-stretch order-last">
        <Button className="flex items-center bg-purple-700 gap-3">
          <Zap />
          Auto-Dialer
        </Button>
        <Button className="items-center bg-green-500 gap-3">
          <Phone />
          Start Session
        </Button>
      </div>
    </div>
  );
}
export default Topbar;
