import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Image } from "react-native";

export default function Footer() {
    return (
        <footer className="bg-gray-100 pt-10 md:pt-14 pb-5">
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-14">
                    <div className="">
                        <a>
                            <div className="flex items-center">
                                <Image
                                    source={require('@/assets/images/logo2.png')}
                                    style={{ width: 200, height: 50 }}
                                />
                            </div>
                        </a>
                        <div className="mt-5">
                            <div className="flex flex-col gap-3">
                                <h5 className="text-slate-400">Social</h5>
                                <div className="flex items-center gap-3">
                                    <a href="/" className="text-slate-600 hover:text-slate-700">
                                        <svg className="w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> 
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a href="/" className="text-slate-600 hover:text-slate-700">
                                        <svg className="w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> 
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> 
                                            <rect x="2" y="9" width="4" height="12"></rect> 
                                            <circle cx="4" cy="4" r="2"></circle> 
                                        </svg>
                                    </a>
                                    <a href="/" className="text-slate-600 hover:text-slate-700">
                                        <svg className="w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> 
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> 
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> 
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> 
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-500/80 mt-5 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan orci at condimentum viverra. Mauris et ex massa. Phasellus pretium gravida erat, et hendrerit lacus efficitur et. Praesent quis ipsum metus.
                        </p>
                    </div>
                    <div className="">
                        <h5 className="text-sm font-semibold uppercase mb-3">Contact Us</h5>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500/80">
                                    <MapPinIcon className="w-4 h-4" />
                                </span>
                                <span className="text-gray-500/80">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500/80">
                                    <PhoneIcon className="w-4 h-4" />
                                </span>
                                <span className="text-gray-500/80">
                                    +91 9876543210
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500/80">
                                    <MailIcon className="w-4 h-4" />
                                </span>
                                <span className="text-gray-500/80">
                                    info@invixel.com
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h5 className="text-sm font-semibold uppercase mb-3">Navigation</h5>
                        <ul>
                            <li className="py-1.5">
                                <a className="text-sm hover:text-slate-700 text-gray-500/80" href="/">Home</a>
                            </li>
                            <li className="py-1.5">
                                <a className="text-sm hover:text-slate-700 text-gray-500/80" href="/">Services</a>
                            </li>
                            <li className="py-1.5">
                                <a className="text-sm hover:text-slate-700 text-gray-500/80" href="/">About</a>
                            </li>
                            <li className="py-1.5">
                                <a className="text-sm hover:text-slate-700 text-gray-500/80" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-5 md:mt-10 border-t border-gray-200 pt-5">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex items-center flex-col">
                        <span className="text-sm text-gray-500/80">© 2025 INVIXEL. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}