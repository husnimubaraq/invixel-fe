"use dom"

import { useState } from "react";
import { ChevronDown, Menu, X } from 'lucide-react';
import { mainNavItems } from "@/layouts/public/data/main-nav-items";
import { Link } from "expo-router";

export default function SidebarMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState('');

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? '' : label);
    };

    return (
        <nav className="md:hidden bg-white z-20">
            <div className="px-4 py-4 flex justify-between items-center border-b">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">IN</span>
                    </div>
                    <span className="ml-2 text-xl font-semibold">INVIXEL</span>
                </div>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-600 z-50 relative"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Full Width Sidebar */}
            <div
                className={`fixed inset-0 min-h-full h-screen overflow-hidden bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ zIndex: 90 }}
            >
                {/* Logo and Close Button */}
                <div className="px-4 py-4 flex justify-between items-center border-b">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">IN</span>
                        </div>
                        <span className="ml-2 text-xl font-semibold">INVIXEL</span>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-600"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="px-4 py-6 space-y-4 overflow-y-auto">
                    {mainNavItems.map((item) => (
                        <div key={item.label}>
                            {item.items ? (
                                <div>
                                    <button
                                        className="w-full flex justify-between items-center py-2 text-gray-800 text-lg"
                                        onClick={() => toggleDropdown(item.label)}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`pl-4 space-y-2 overflow-hidden transition-all duration-200 ${openDropdown === item.label ? 'max-h-96 mt-2' : 'max-h-0'
                                            }`}
                                    >
                                        {item.items.map(({ label, link }, index) => (
                                            <Link
                                                key={index}
                                                href={link as any}
                                                className="block py-2 text-gray-600 hover:text-gray-900"
                                                onPress={() => {
                                                    setIsMenuOpen(false)
                                                    toggleDropdown(item.label)
                                                }}
                                            >
                                                {label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.link as any}
                                    className="block py-2 text-gray-800 hover:text-gray-900 text-lg"
                                    onPress={() => {
                                        setIsMenuOpen(false)
                                    }}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/admin/login"
                        className="block py-2 text-gray-800 hover:text-gray-900 text-lg"
                        onPress={() => {
                            setIsMenuOpen(false)
                        }}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    )
}