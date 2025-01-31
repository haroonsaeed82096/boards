import { Heading } from "@/components/heading";
import { Suspense } from "react";
import { TicketList } from "@/features/ticket/components/ticket-list";
import Spinner from "@/components/spinner";
import CreateTicketForm from "@/features/ticket/components/create-ticket-form";
import { CardCompact } from "@/components/card-compact";
const TicketsPage = async () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets at one place" />
      <CardCompact
        title="Create Ticket"
        description="Create a new ticket"
        className="w-full max-w-[420px] self-center"
        content={<CreateTicketForm />}
      />
      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
