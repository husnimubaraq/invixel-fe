import React, { useState } from 'react';
import { ChevronDown, Video } from 'lucide-react';
import { mainNavItems } from '@/layouts/public/data/main-nav-items';
import Sidebar from '@/layouts/public/components/sidebar';

import "@/global.css"
import { Link, router } from 'expo-router';
import Logo2 from '@/components/icons/logo-2';

export default function TopNavigation() {
    const [openDropdown, setOpenDropdown] = useState('');

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? '' : label);
    };

    return (
        <>
            <Sidebar />
            <nav className="hidden md:block border-b bg-white">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="flex items-center">
                                    <Logo2 className="w-40 h-40" />
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center space-x-8">
                            <Link href="/" className="text-gray-700">Home</Link>
                            {mainNavItems.slice(1, mainNavItems.length).map((item) => (
                                <div key={item.label} className="relative group">
                                    {item.items ? (
                                        <>
                                            <button
                                                className="flex items-center text-gray-700 hover:text-gray-900 text-sm"
                                                onClick={() => toggleDropdown(item.label)}
                                            >
                                                {item.label}
                                                {item.items && <ChevronDown className="ml-1 w-4 h-4" />}
                                            </button>
                                            {item.items && openDropdown === item.label && (
                                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                    <div className="py-1">
                                                        {item.items.map(({ label, link }, index) => (
                                                            <Link
                                                                key={index}
                                                                href={link as any}
                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                onPress={() => {
                                                                    toggleDropdown(item.label)
                                                                }}
                                                            >
                                                                {label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link href={item.link as any} className="text-gray-700">{item.label}</Link>
                                    )}
                                </div>
                            ))}
                            <div className="hidden lg:flex items-center ms-3">
                                <Link href="/(public)/schedule" className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm">
                                    Schedule a call
                                    <Video color="white" className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}