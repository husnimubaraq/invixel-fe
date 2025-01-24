import { cn } from "@/functions/utils";
import { Props } from "./type";
import { User } from "lucide-react";

export const ContactResultItem = (props: Props) => {
    const { data } = props

    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-full cursor-pointer overflow-hidden rounded-2xl p-4 bg-white",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl bg-primary"
                >
                    <User color="white" size={20} />
                </div>
                <div className="flex flex-col overflow-hidden flex-1">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium ">
                        <span className="text-sm sm:text-lg">{data.firstName} {data.lastName}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{data.email}</span>
                    </figcaption>
                    <p className="text-sm font-normal text-gray-400 line-clamp-2">
                        {data.message}
                    </p>
                </div>
            </div>
        </figure>
    )
}