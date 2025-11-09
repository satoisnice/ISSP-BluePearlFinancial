"use client";

import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Phone, MessageSquare } from "lucide-react";

import type { TodoItem } from "@/types/types";
import MockTodoItem from "@/data/mockTodo";

const priorityClass: Record<TodoItem["priority"], string> = {
  urgent:
    "bg-[var(--badge-urgent-bg)] text-[var(--badge-urgent-text)] border border-[var(--badge-urgent-border)]",
  high: "bg-[var(--badge-high-bg)] text-[var(--badge-high-text)] border border-[var(--badge-high-border)]",
  normal:
    "bg-[var(--badge-normal-bg)] text-[var(--badge-normal-text)] border border-[var(--badge-normal-border)]",
};

const tagClass: Record<TodoItem["tag"], string> = {
  "follow-up":
    "bg-[var(--tag-follow-up-bg)] text-[var(--tag-follow-up-text)] border border-[var(--tag-follow-up-border)]",
  pipeline:
    "bg-[var(--tag-pipeline-bg)] text-[var(--tag-pipeline-text)] border border-[var(--tag-pipeline-border)]",
  prospecting:
    "bg-[var(--tag-prospecting-bg)] text-[var(--tag-prospecting-text)] border border-[var(--tag-prospecting-border)]",
};

export default function AttentionList() {
  const items = MockTodoItem;

  return (
    <div>
      <h1 className="text-lg font-bold">What needs your attention today</h1>

      <ScrollArea className="h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <Card
              key={item.id}
              className="flex flex-row items-start justify-between gap-4 p-4"
            >
              {/* title/subtitle */}
              <CardContent className="flex-1 p-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={priorityClass[item.priority]}>
                    {item.priority}
                  </Badge>
                  <Badge className={tagClass[item.tag]}>{item.tag}</Badge>
                </div>

                <div className="text-sm font-semibold">{item.title}</div>
                <div className="text-sm text-slate-600">{item.subtitle}</div>
              </CardContent>

              {/* amount, stage, actions */}
              <CardFooter className="p-0 flex flex-col items-end gap-2 shrink-0">
                {(item.amount || item.stage) && (
                  <div className="text-right">
                    {item.amount && (
                      <div className="text-base font-semibold">
                        {item.amount}
                      </div>
                    )}
                    {item.stage && (
                      <div className="text-xs text-slate-500">{item.stage}</div>
                    )}
                  </div>
                )}

                {(item.actions?.phone || item.actions?.message) && (
                  <div className="flex items-center gap-2">
                    {item.actions?.phone && (
                      <Button
                        variant="default"
                        size="icon"
                        className="border-[var(--Custom-color)] bg-[var(--Custom-color)] hover:bg-[var(--Custom-color)] hover:text-white focus-visible:ring-[var(--Custom-color)]"
                        aria-label={`Call ${item.title}`}
                      >
                        <Phone className="h-[1.1rem] w-[1.1rem]" />
                      </Button>
                    )}
                    {item.actions?.message && (
                      <Button
                        variant="default"
                        size="icon"
                        className="border-[var(--textmssg)] bg-[var(--textmssg)] hover:bg-[var(--textmssg)] hover:text-white focus-visible:ring-[var(--textmssg)]"
                        aria-label={`Message ${item.title}`}
                      >
                        <MessageSquare className="h-[1.1rem] w-[1.1rem]" />
                      </Button>
                    )}
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
