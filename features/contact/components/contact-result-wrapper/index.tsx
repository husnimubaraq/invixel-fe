"use dom"

import { LayoutWrapper } from "@/layouts/public/components/layout-wrapper";
import { router } from "expo-router";
import { Fragment, useEffect, useState } from "react";
import { HttpTransportType, HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { ContactItem } from "../../types/contact";
import { AnimatedList } from "@/components/animated-list";
import { ContactResultItem } from "../contact-result-item";
import Lottie from 'react-lottie';

export default function ContactResultWrapper() {

    const [connection, setConnection] = useState<HubConnection | null>(null)
    const [data, setData] = useState<ContactItem[]>([])

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl("http://localhost:5023/contacthub", {
                skipNegotiation: true,
                transport: HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .build()


        setConnection(connection)
    }, [])

    useEffect(() => {
        if (connection) {
            connection.start().then(() => {
                connection.on("ReceiveMessage", (contact: ContactItem) => {
                    setData(prev => [...prev, contact])
                })
            }).catch(error => {
                console.log(error)
            })
        }
    }, [connection])

    return (
        <LayoutWrapper>
            <section className="lg:pb-24 relative">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="py-5 lg:py-14">
                        <div className="flex flex-wrap items-center gap-2 bg-gray-100 py-2 px-3">
                            <a className="transition-all hover:text-primary" href="/prompt_tr/pages/blogs/post">Home</a> /
                            <a className="transition-all hover:text-primary" href="/contact-us">Contact Us</a> /
                            <p className="text-gray-500">Result</p>
                        </div>
                    </div>
                    <div className="text-left">
                        <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Contact Us</span>
                        <h1 className="text-2xl/tight text-black font-medium mt-3 whitespace-pre-line">
                            {`Result`}
                        </h1>
                    </div>
                    {data.length > 0 ? (
                        <AnimatedList>
                            {data.map((item, index) => (
                                <Fragment key={index}>
                                    <ContactResultItem data={item} />
                                </Fragment>
                            ))}
                        </AnimatedList>
                    ) : (
                        <div className="flex justify-center items-center lg:h-[400px] h-auto">
                            <Lottie
                                options={{
                                    autoplay: true,
                                    loop: true,
                                    animationData: require('@/assets/animations/data-not-found.json')
                                }}
                                isPaused={false}
                                isStopped={false}
                                isClickToPauseDisabled={true}
                            />
                        </div>
                    )}
                </div>
            </section>
        </LayoutWrapper>
    )
}