import { HubConnection } from "@microsoft/signalr"
import { TConversation } from "../../types/conversation"
import { TAuth } from "@/types/auth"

export type TProps = {
    selectedChat: TConversation | null
    isMobileView: boolean
    setSelectedChat: (chat: TConversation | null) => void
    setConversations: (conversations: TConversation[]) => void
    conversations: TConversation[]
    connection: HubConnection
    auth: TAuth
    onDelete: () => void
}