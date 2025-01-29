import { initialTickets } from "@/data";
import Link from "next/link";
import { ticketPath } from "@/paths";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import { LucideCheckCircle, LucideFileText, LucidePencil } from "lucide-react";
import { Heading } from "@/components/heading";
import { TicketItem } from "@/features/ticket/components/ticket-item";

const TICKET_ICONS = {
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
  DONE: <LucideCheckCircle />,
};
const Tickets = () => {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading title="Tickets" description="List of tickets" />
      <Separator />
      </div>
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top mt-5">
        {initialTickets.map((ticket) => {
          return (
            <>
              <TicketItem key={ticket.id} ticket={ticket} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Tickets;
