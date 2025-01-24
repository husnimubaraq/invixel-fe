import { motion } from "framer-motion";
import { TProps } from "./type";
import { LogOut, Search } from "lucide-react";
import { User } from "iconsax-react";
import { Image } from "react-native";
import { Button } from "@heroui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

export default function ConversationList(props: TProps) {
    const { conversations, selectedChat, setSelectedChat } = props

    return (
        <div className="flex flex-col h-full">
            <div className="p-4 bg-white border-b flex justify-between items-center">
                <Image
                    source={require('@/assets/images/logo2.png')}
                    style={{ width: 150, height: 35 }}
                />
                <Button>
                    <LogOut size={24} />
                </Button>
            </div>

            <div className="p-4 bg-white border-b">
                <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                {conversations.map((chat) => (
                    <motion.div
                        key={chat.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                        className={`p-4 flex items-center space-x-4 border-b cursor-pointer ${selectedChat?.id === chat.id ? 'bg-blue-50' : ''
                            }`}
                        onClick={() => setSelectedChat(chat)}
                    >
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                                <User size={24} color="white" variant="Bulk" />
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold truncate">{chat.userName}</h3>
                                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{dayjs(chat.createdAt).fromNow()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
