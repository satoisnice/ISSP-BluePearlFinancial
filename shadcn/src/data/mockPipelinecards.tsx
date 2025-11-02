import { PipelineItem } from "@/types/types";
export const mockPipeline: PipelineItem[] = [
  { title: "Application", totalAmount: 680_000, href: "/calls", count: 8 },
  { title: "Processing", totalAmount: 425_000, href: "/documents", count: 5 },
  { title: "Underwriting", totalAmount: 720_000, href: "/documents", count: 6 },
  { title: "Appraisal", totalAmount: 285_000, href: "/documents", count: 2 },
  {
    title: "Ready To Fund",
    totalAmount: 340_000,
    href: "/documents",
    count: 10,
  },
];

export default mockPipeline;
