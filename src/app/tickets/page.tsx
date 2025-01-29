import { initialTickets } from "@/data";
import Link from "next/link";
import { ticketPath } from "@/paths";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import { LucideCheckCircle, LucideFileText, LucidePencil } from "lucide-react";
import { Heading } from "@/components/heading";

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
              <Card
                key={ticket.id}
                className="w-full max-w-[410px] p-4 border border-slate-100 rounded"
              >
                <CardHeader>
                  <CardTitle className="flex gap-x-2">
                    <span>{TICKET_ICONS[ticket.status]}</span>
                    <span className="truncate">{ticket.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span
                    className="line-clamp-3 whitespace-break-spaces"
                  >
                    {ticket.content}
                  </span>
                </CardContent>
                <CardFooter>
                <Link
                  href={ticketPath(ticket.id)}
                  className="text-sm underline"
                >
                  View
                </Link>
                </CardFooter>
              </Card>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Tickets;
