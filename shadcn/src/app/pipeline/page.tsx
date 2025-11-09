import PipelineCards from "@/components/PipelineCards";
import ActiveDeals from "@/components/ui/ActiveDeals";
import { PipelineTopBar } from "@/components/ui/PipelineTopBar";

export default function ProspectingPage() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <PipelineTopBar />
        <PipelineCards />
        <ActiveDeals />
      </div>
    </section>
  );
}
