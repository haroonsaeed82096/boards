import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { homePath, ticketsPath } from "@/paths";
import { LucideKanban } from "lucide-react";

export default function Header() {
    return (
        <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex gap-5 py-2.5 px-5 justify-center">
          <Link className={buttonVariants({ variant: "ghost" })} href={homePath()}><LucideKanban /><h1 className="text-lg font-semibold">TicketBounty</h1></Link>
          <Link className={buttonVariants({ variant: "default" })} href={ticketsPath()}>Tickets</Link>
        </nav>
    );
}