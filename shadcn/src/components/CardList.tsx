import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Moon, Phone, Sun, MessageSquare } from "lucide-react";

export const latestTransactions = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969891/pexels-photo-4969891.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1100,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

export const popularContent = [
  {
    id: 1,
    title: "JavaScript Tutorial",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 4300,
  },
  {
    id: 2,
    title: "Tech Trends 2025",
    badge: "Tech",
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3200,
  },
  {
    id: 3,
    title: "The Future of AI",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2400,
  },
];

const CardList = ({ title }: { title: string }) => {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;
  return (
    <div className="">
      <h1 className="text-lg font-bold">{title}</h1>
      <ScrollArea className="h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-2">
          {list.map((item) => (
            <Card
              key={item.id}
              className="flex-row items-center justify-between gap-4 p-4"
            >
              <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1 p-0">
                <CardTitle className="text-sm font=medium">
                  {item.badge}
                </CardTitle>
                <Badge>{item.title} </Badge>
              </CardContent>
              <CardFooter className="p-0 flex flex-col items-start gap-2">
                ${item.count}
                <div className="flex items-center gap-2">
                  <Button
                    variant="default"
                    size="icon"
                    className="border-[var(--Custom-color)] 
             bg-[var(--Custom-color)] hover:bg-[var(--Custom-color)] hover:text-white
             focus-visible:ring-[var(--Custom-color)]"
                  >
                    <Phone className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                  <Button
                    variant="default"
                    size="icon"
                    className="border-[var(--textmssg)] 
             bg-[var(--textmssg)] hover:bg-[var(--textmssg)] hover:text-white
             focus-visible:ring-[var(--textmssg)]"
                  >
                    <MessageSquare className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CardList;
