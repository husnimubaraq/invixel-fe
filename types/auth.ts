import { nameIdentifier } from "@/constants/Common"

export type TAuth = {
    iss: string
    [nameIdentifier]: string
    aud: string
    exp: number
}