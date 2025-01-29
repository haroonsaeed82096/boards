import Link from "next/link";
import { ticketsPath } from "@/paths";
import { Heading } from "@/components/heading";
export default function Home() {
  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading title="Welcome" description="This is the example for the Next.js Learn Course, brought to you by Vercel." />
      </div>
      <div className="flex-1 flex flex-col gap-y-8">
        <Link href={ticketsPath()} className="text-sm underline">Go to Tickets</Link>
      </div>
    </>
  );
}
