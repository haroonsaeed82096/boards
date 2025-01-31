import { prisma } from "@/lib/prisma";
export const getTicket = async () => {
  return await prisma.ticket.findMany({
    orderBy: {
      createdAt: "desc",
    }
  })
};