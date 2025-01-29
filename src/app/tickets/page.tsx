import { initialTickets } from "@/data";
import { Separator } from "@/components/ui/separator"
import { Heading } from "@/components/heading";
import { TicketItem } from "@/features/ticket/components/ticket-item";

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
