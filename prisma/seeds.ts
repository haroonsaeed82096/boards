import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Tickets = [
    {
        title: "First Ticket",
        content: "This is the first ticket from DB",
        status: "DONE" as const,
    },
    {
        title: "Second Ticket",
        content: "This is the second ticket from DB",
        status: "OPEN" as const
    },
    {
        title: "Third Ticket",
        content: "This is the third ticket from DB",
        status: "IN_PROGRESS" as const
    }
]

const seed = async () => {
    const t0 = performance.now();
    console.log("Seeding started into DB");

    await prisma.ticket.deleteMany();

    await prisma.ticket.createMany({
        data: Tickets
    });

    const t1 = performance.now();
    console.log(`Seeding completed in ${t1 - t0} ms`);
}

seed();