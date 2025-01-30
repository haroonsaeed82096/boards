"use client"
import { Placeholder } from "@/components/placeholder"
export default function Error({ error: Error }: { error: Error }) {
    return <Placeholder label={Error.message ?? "Something went wrong!"} />
}