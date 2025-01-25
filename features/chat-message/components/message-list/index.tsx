import React, { useEffect, useRef, useState } from "react";
import { TProps } from "./type";
import { ArrowLeft, Paperclip } from "lucide-react";
import { motion } from "framer-motion";
import { Send, Trash, User } from "iconsax-react";
import { Button, Input } from "@heroui/react";
import { cn } from "@/functions/utils";
import { TMessage } from "../../types/conversation";
import { TAuth } from "@/types/auth";
import { nameIdentifier } from "@/constants/common";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

export default function MessageList(props: TProps) {
    const { selectedChat, isMobileView, setSelectedChat, auth, connection, onDelete } = props

    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState<TMessage[]>([]);

    const handleSend = () => {
        if (!newMessage.trim() || !selectedChat) return;

        setMessages(prev => [
            ...prev,
            {
                conversationId: selectedChat.id,
                messageText: newMessage,
                senderId: auth[nameIdentifier],
                createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                id: dayjs().toDate().toUTCString()
            }
        ])

        connection.invoke("SendMessageToSpecificUser", selectedChat.id, newMessage, selectedChat.userId)

        setNewMessage("")
    };

    useEffect(() => {
        if (selectedChat && connection) {
            console.log('selectedChat.id: ', selectedChat.id)

            connection.invoke("InitMessage", selectedChat.id)

            connection.on(`ReceiveMessages-${selectedChat.id}`, (data: TMessage[]) => {
                setMessages(data)
            })

            connection.on(`ReceiveMessage-${selectedChat.id}`, (message: TMessage) => {

                console.log('message.conversationId: ', message.conversationId)
                if (selectedChat.id === message.conversationId) {
                    setMessages(prev => [
                        ...prev,
                        message
                    ])
                }
            })

            return () => {
                connection.off(`ReceiveMessage-${selectedChat.id}`)
            }
        }
    }, [selectedChat, connection])

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.lastElementChild?.scrollIntoView()
        }
    }, [messages]);

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 bg-white border-b">
                <div className="flex items-center">
                    {isMobileView && (
                        <button
                            onClick={() => setSelectedChat(null)}
                            className="mr-4"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                    )}
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                        <User size={24} color="white" variant="Bulk" />
                    </div>
                    <div className="ml-4">
                        <h2 className="font-semibold">{selectedChat?.userName}</h2>
                    </div>
                </div>
                <Button
                    onPress={onDelete}
                >
                    <Trash color="#f5425d" size={24} />
                </Button>
            </div>

            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => {
                    const isSelf = message.senderId === auth[nameIdentifier]

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${isSelf ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-[70%] ${isSelf ? 'bg-blue-500 text-white' : 'bg-white'
                                } rounded-2xl px-4 py-2 shadow-sm`}>
                                <p className={cn(isSelf ? 'text-white' : 'text-gray-600')}>{message.messageText}</p>
                                <p className={`text-xs mt-1 ${isSelf ? 'text-blue-100' : 'text-gray-500'
                                    }`}>
                                    {dayjs(message.createdAt).fromNow()}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            <div className="p-4 bg-white border-t">
                <div className="flex items-center space-x-2">
                    <div className="flex-1">
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                            placeholder="Type a message..."
                            className="w-full px-4 py-2 bg-gray-100 rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-32"
                            rows={1}
                        />
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSend}
                        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                        <Send size={24} variant="Bulk" color="white" />
                    </motion.button>
                </div>
            </div>
        </div>
    )
}
