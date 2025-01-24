import { TConversation } from "../../types/conversation"

export type TProps = {
    conversations: TConversation[]
    selectedChat: TConversation | null
    setSelectedChat: (chat: TConversation | null) => void
}