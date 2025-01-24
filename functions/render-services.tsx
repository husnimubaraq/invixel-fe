"use server"

import ServiceWrapper from "@/features/services/components/service-wrapper";

export function renderServices(slug: string) {
    return <ServiceWrapper slug={slug as string} />
}
