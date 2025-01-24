export type TConversation = {
    id: string;
    userName: string;
    message: string;
    createdAt: string;
    userId: string;
}

export type TMessage = {
    id: string;
    messageText: string;
    senderId: string;
    createdAt: string;
    conversationId: string
}
