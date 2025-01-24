import AzureIcon from "@/components/icons/azure-icon";
import CSharpIcon from "@/components/icons/csharp-icon";
import GraphqlIcon from "@/components/icons/graphql-icon";
import NextIcon from "@/components/icons/next-icon";
import PostgreSqlIcon from "@/components/icons/postgresql-icon";
import PythonIcon from "@/components/icons/python-icon";
import ReactIcon from "@/components/icons/react-icon";
import RedisIcon from "@/components/icons/redis-icon";
import VueIcon from "@/components/icons/vue-icon";
import { Image } from "react-native";

const techStackClasses = "w-20 h-20 lg:w-20 lg:h-20 ";

export default function ClientSection() {
    return (
        <section className="py-10 md:py-32 relative bg-primary/10 mb-0 md:mb-20">
            <div className="absolute top-0 inset-x-0 hidden sm:block">
                <img src="https://themes.coderthemes.com/prompt_tr/assets/white-wave-b5c33892.svg" alt="svg" className="w-full -scale-x-100" />
            </div>
            <div className="container relative mx-auto px-4 md:px-0">
                <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Our Tech Stack</span>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5">
                    <h1 className="text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <p className="text-slate-600">
                        We utilize a modern technology stack to build and maintain high-quality applications. Here is a quick overview of some frameworks and tools we work with.
                    </p>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-6 mt-12 gap-10">
                    <ReactIcon className={techStackClasses} />
                    <NextIcon className={techStackClasses} />
                    <VueIcon className={techStackClasses} />
                    <CSharpIcon className={techStackClasses} />
                    <PythonIcon className={techStackClasses} />
                    <GraphqlIcon className={techStackClasses} />
                    <PostgreSqlIcon className={techStackClasses} />
                    <RedisIcon className={techStackClasses} />
                    <AzureIcon className={techStackClasses} />
                </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 hidden sm:block">
                <img src="https://themes.coderthemes.com/prompt_tr/assets/white-wave-b5c33892.svg" alt="svg" className="w-full scale-x-100 -scale-y-100" />
            </div>

        </section>
    )
}