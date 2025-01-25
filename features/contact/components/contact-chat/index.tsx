import { TMessage } from "@/features/chat-message/types/conversation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useRef, useState } from "react";
import { TProps } from "./type";
import { ArrowLeft } from "lucide-react";
import { Send, User } from "iconsax-react";
import { nameIdentifier } from "@/constants/common";
import { motion } from "framer-motion";
import { cn } from "@/functions/utils";
import { Input } from "@heroui/react";

dayjs.extend(relativeTime)

export default function ContactChat(props: TProps) {
    const { connection, conversationId, auth, messages, setMessages } = props

    const chatContainerRef = useRef<HTMLDivElement>(null);
    const [newMessage, setNewMessage] = useState("");

    const handleSend = () => {
        if (!newMessage.trim() || !conversationId) return;

        setMessages((prev) => [
            ...prev,
            {
                conversationId: conversationId,
                messageText: newMessage,
                senderId: auth[nameIdentifier],
                createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
                id: dayjs().toDate().toUTCString()
            }
        ])

        connection.invoke("SendMessageToAdmin", conversationId, newMessage)

        setNewMessage("")
    };

    useEffect(() => {
        if (connection) {
            connection.on(`ReceiveMessage-${conversationId}`, (message: TMessage) => {
                console.log('ReceiveMessage: ', message)
                setMessages((prev) => [
                    ...prev,
                    message
                ])
            })
        }
    }, [connection])

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.lastElementChild?.scrollIntoView()
        }
    }, [messages]);

    return (
        <div className="flex flex-col bg-white shadow-md rounded-xl overflow-hidden relative">
            <div className="flex items-center p-4 bg-white border-b sticky top-0">
                <button
                    onClick={() => {

                    }}
                    className="mr-4"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                    <User size={24} color="white" variant="Bulk" />
                </div>
                <div className="ml-4">
                    <h2 className="font-semibold">Admin</h2>
                </div>
            </div>
            <div className="overflow-y-auto flex-1 max-h-[550px] p-4 space-y-4  ">
                {messages.map((message) => {
                    const isSelf = message.senderId === auth[nameIdentifier]

                    return (
                        <motion.div
                            key={message.id}
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