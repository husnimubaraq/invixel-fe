
"use dom"

import { router } from "expo-router";
import { services } from "../../data/services";
import { LayoutWrapper, LayoutWrapperMobile } from "@/layouts/public/components/layout-wrapper";
import { Fragment } from "react";

type Props = {
    slug: string;
    isMobile?: boolean;
}

export default function ServiceWrapper(props: Props) {
    const { slug, isMobile } = props

    const ComponentWrapper = isMobile ? LayoutWrapperMobile : LayoutWrapper;

    const service = services.find(service => service.slug === slug)

    return (
        <ComponentWrapper>
            <section className="pt-20 lg:pt-36 pb-24 bg-slate-100">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="md:text-5xl/tight text-3xl font-semibold mb-5">{service?.title}</h2>
                        <p className="md:text-lg text-slate-500 leading-7">{service?.description}</p>
                    </div>
                </div>
            </section>
            <section className="py-10 md:py-24">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {service?.data.map((item, index) => (
                            <Fragment key={index}>
                                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-4">
                                    <div className="flex justify-center items-center relative">
                                        <img src={item.icon} alt={item.title} className="object-cover w-auto h-24" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-slate-500 leading-7 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sapien urna, hendrerit non faucibus vitae, aliquet et arcu. Pellentesque placerat in metus sed porttitor. Integer a finibus mi. </p>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </section>
        </ComponentWrapper>
    )
}
