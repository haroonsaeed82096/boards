import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "@prisma/client"
import { LucideArrowUpRightFromSquare, LucideTrash } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { deleteTicket } from "../actions/delete-ticket";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
};

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
  const DetailButton = (
    <Button variant="outline" size="icon" asChild>
      <Link prefetch href={ticketPath(ticket.id)}>
        <LucideArrowUpRightFromSquare className="h-4 w-4"></LucideArrowUpRightFromSquare>
      </Link>
    </Button>
  );

  const DeleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
    <Button variant="outline" size="icon">
      <LucideTrash className="h-4 w-4"/>
    </Button>
    </form>
  )
  return (
    <div
      className={clsx("w-full flex gap-x-1", {
        "max-w-[580px]": isDetail,
        "max-w-[420px]": !isDetail,
      })}
    >
      <Card className="w-full max-w-[420px]">
        <CardHeader>
          <CardTitle className="flex gap-x-2">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span
            className={clsx("whitespace-break-spaces", {
              "line-clamp-3": !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
      </Card>
        <div className="flex flex-col gap-y-1">{isDetail ? DeleteButton : DetailButton}</div>
    </div>
  );
};

export { TicketItem };
