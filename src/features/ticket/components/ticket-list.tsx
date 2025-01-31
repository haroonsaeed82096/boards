import { Ticket } from "@prisma/client";
import { TicketItem } from "./ticket-item";
import { prisma } from "@/lib/prisma";
const TicketList = async () => {
  const tickets = await prisma.ticket.findMany();
  return (
    <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
      {tickets.map((ticket: Ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export { TicketList };
