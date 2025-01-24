import { nameIdentifier } from "@/constants/common"

export type TAuth = {
    iss: string
    [nameIdentifier]: string
    aud: string
    exp: number
}