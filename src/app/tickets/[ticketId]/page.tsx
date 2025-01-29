import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";
import { Link } from "lucide-react";
type TicketProps = {
  params: Promise<{
    ticketId: string;
  }>;
};
const Ticket = async ({ params }: TicketProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
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
    <div>
      <h2>{ticket?.title}</h2>
      <p>{ticket?.content}</p>
    </div>
  );
};

export default Ticket;
