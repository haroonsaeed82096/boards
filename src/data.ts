export const initialTickets = [
    {
        id:"1",
        title:"Ticket 1",
        content:"Description of Ticket 1",
        //fix type issue
        status:"DONE" as const,
        priority:"high",
    },
    {
        id:"2",
        title:"Ticket 2",
        content:"Description of Ticket 2",
        status:"OPEN" as const,
        priority:"high",
    },
    {
        id:"3",
        title:"Ticket 3",
        content:"Description of Ticket 3",
        status:"DONE" as const,
        priority:"high",
    },
    {
        id:"4",
        title:"Ticket 4",
        content:"Description of Ticket 4",
        status:"IN_PROGRESS" as const,
        priority:"high",
    },
    {
        id:"5",
        title:"Ticket 5",
        content:"Description of Ticket 5",
        status:"IN_PROGRESS" as const,
        priority:"high",
    }
]