"use dom"

import React, { useEffect, useState } from "react";
import { dataConversations } from "../../data/conversations";
import { TConversation, TMessage } from "../../types/conversation";
import ConversationList from "../conversation-list";
import MessageList from "../message-list";

import "@/global.css"
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { HttpTransportType } from "@microsoft/signalr";
import { baseChatHubURL } from "@/apis";
import { jwtDecode } from "jwt-decode";
import { TAuth } from "@/types/auth";

export default function ChatMessageWrapper({ token }: { token: string | null }) {

    const [connection, setConnection] = useState<HubConnection | null>(null)

    const [auth, setAuth] = useState<TAuth | null>(null)
    const [selectedChat, setSelectedChat] = useState<TConversation | null>(null);
    const [isMobileView, setIsMobileView] = useState(false);

    const [conversations, setConversations] = useState<TConversation[]>([])

    // Check for mobile view on mount and window resize
    useEffect(() => {
        const checkMobile = () => setIsMobileView(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (token) {

            const user = jwtDecode(token ?? '', 
            {
                header: false,
            }) as TAuth;

            setAuth(user)

            const connection = new HubConnectionBuilder()
                .withUrl(`${baseChatHubURL}`, {
                    skipNegotiation: true,
                    transport: HttpTransportType.WebSockets,
                    accessTokenFactory: () => token
                })
                .withAutomaticReconnect()
                .build()

            setConnection(connection)
        }
    }, [token])
    
    useEffect(() => {
        if (connection) {
            connection.start().then(() => {
                connection.on("ReceiveConversations", (data: TConversation[]) => {
                    setConversations(data)
                })
            }).catch(error => {
                console.log(error)
            })
        }
    }, [connection])

    console.log(conversations)

    return (
        <div className="h-screen bg-gray-50 w-full">
            <div className="mx-auto h-full">
                <div className="flex h-full">
                    {/* Conversation List */}
                    <div className={`${isMobileView
                            ? selectedChat ? 'hidden' : 'w-full'
                            : 'w-1/3 border-r'
                        } bg-white`}>
                        <ConversationList 
                            conversations={conversations} 
                            selectedChat={selectedChat} 
                            setSelectedChat={setSelectedChat}
                        />
                    </div>

                    {/* Chat Interface */}
                    <div className={`${isMobileView
                            ? selectedChat ? 'w-full' : 'hidden'
                            : 'w-2/3'
                        } bg-white`}>
                        {(selectedChat && connection && auth) ? (
                            <MessageList 
                                auth={auth}
                                connection={connection}
                                selectedChat={selectedChat} 
                                isMobileView={isMobileView} 
                                setSelectedChat={setSelectedChat} 
                                setConversations={setConversations} 
                                conversations={conversations} 
                            />
                        ) : (
                            <div className="h-full flex items-center justify-center text-gray-500">
                                Select a conversation to start messaging
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}