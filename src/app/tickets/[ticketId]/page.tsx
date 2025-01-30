import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/paths";
import { Link } from "lucide-react";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
type TicketProps = {
  params: Promise<{
    ticketId: string;
  }>;
};
const Ticket = async ({ params }: TicketProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);
  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Go to Tickets</Link>
          </Button>
        }
      />
    );
  }
  return (
    <div className="flex justify-center animate-fade-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default Ticket;
