"use dom"

import { LayoutWrapper, LayoutWrapperMobile } from "@/layouts/public/components/layout-wrapper";
import { router } from "expo-router";
import HeroSection from "../hero-section";
import OurWorkingSection from "../our-working-section";
import OurTeamSection from "../our-team-section";
import ContactSection from "@/features/home/components/contact-section";
import ClientSection from "@/features/home/components/client-section";
import { Fragment } from "react";
import { MonitorSmartphone, TabletSmartphone } from "lucide-react";
import { cn } from "@/functions/utils";

const specialize = [
    {
        title: "Custom Software Development",
        description: "Custom software solutions tailored to client needs",
        icon: <MonitorSmartphone className="w-7 h-7" color="#2463eb" />,
    },
    {
        title: "Web Development",
        description: "Custom websites that are fast, responsive, and designed to stand out.",
        icon: <MonitorSmartphone className="w-7 h-7" color="#2463eb" />,
    },
    {
        title: "App Development",
        description: "Creating user-friendly, high-performance mobile apps for iOS and Android.",
        icon: <TabletSmartphone className="w-7 h-7" color="#2463eb" />,
    },
    {
        title: "IT Solutions",
        description: "Providing the tech support and systems businesses need to grow and succeed.",
        icon: <MonitorSmartphone className="w-7 h-7" color="#2463eb" />,
    },
]

const values = [
    {
        title: "Innovation",
        description: "Always pushing the limits to stay ahead of the curve."
    },
    {
        title: "Quality",
        description: "Delivering work that we’re proud of and that works for you."
    },
    {
        title: "Customer-First",
        description: "Your success is our priority."
    },
]

export default function AboutWrapper({ isMobile }: { isMobile?: boolean }) {

    const ComponentWrapper = isMobile ? LayoutWrapperMobile : LayoutWrapper;

    return (
        <ComponentWrapper>
            <HeroSection />
            <div className="lg:py-24 py-16">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-5 items-center">
                            <div className="flex flex-col items-center lg:items-center">
                                <h1 className="text-3xl whitespace-pre-line text-center">{`Increasing Business Success with \nInnovation In Every Pixel`}</h1>
                                <div className="border-t-2 border-gray-300 w-1/5 mt-7"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 col-span-2">
                            <div className="lg:col-span-2 flex flex-col gap-5">
                                <p className="text-sm/relaxed tracking-wider text-gray-600 text-justify">
                                    At <strong>INVIXEL</strong>, we’re all about bringing your digital ideas to life. Whether it’s building sleek websites, developing powerful mobile apps, or providing smart IT solutions, we’re here to help businesses thrive in the digital world.
                                </p>
                                <p className="text-sm/relaxed tracking-wider text-gray-600 text-justify">
                                    Our team is passionate about making technology work for you. We focus on understanding your unique challenges and turning them into simple, effective solutions. Our approach is all about collaboration, innovation, and delivering results that make a difference.
                                </p>
                                <p className="text-sm/relaxed tracking-wider text-gray-600 text-justify">
                                    Whether you’re a startup or a well-established company, we’ve got the tools, skills, and mindset to help you achieve your goals.
                                </p>
                                <p className="text-sm/relaxed tracking-wider text-gray-600 text-justify">
                                    Let’s build something awesome together. Reach out to us at [contact details].
                                </p>
                            </div>
                            <div>
                                <h6 className="mb-2 font-semibold">Founded in 2025, we specialize in:</h6>
                                <div className="flex flex-col gap-3">
                                    {specialize.map((item, index) => (
                                        <Fragment key={index}>
                                            <div className="flex flex-start gap-3">
                                                {/* <div className={cn("w-12 h-12 rounded-md bg-primary/20 flex items-center justify-center")}>
                                                    {item.icon}
                                                </div> */}
                                                <div className="flex flex-col flex-1">
                                                    <h4 className="text-sm font-medium">{item.title}</h4>
                                                    <p className="text-sm">{item.description}</p>
                                                </div>
                                            </div>
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-2 font-semibold">Our Values:</h6>
                                <div className="flex flex-col gap-3">
                                    {values.map((item, index) => (
                                        <Fragment key={index}>
                                            <div className="flex flex-start gap-3">
                                                <div className="flex flex-col flex-1">
                                                    <h4 className="text-sm font-medium">{item.title}</h4>
                                                    <p className="text-sm">{item.description}</p>
                                                </div>
                                            </div>
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurWorkingSection />
            <OurTeamSection />
            <ClientSection />
            <ContactSection />
        </ComponentWrapper>
    )
}