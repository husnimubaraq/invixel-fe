import { TMessage } from "@/features/chat-message/types/conversation";
import { TAuth } from "@/types/auth";
import { HubConnection } from "@microsoft/signalr";
import { Dispatch, SetStateAction } from "react";

export type TProps = {
    conversationId: string;
    connection: HubConnection
    auth: TAuth
    messages: TMessage[]
    setMessages: Dispatch<SetStateAction<TMessage[]>>
}