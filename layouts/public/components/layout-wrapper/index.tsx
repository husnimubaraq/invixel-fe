
import TopNavigation from "@/layouts/public/components/top-navigation";
import Footer from "@/layouts/public/components/footer";
import "@/global.css"
import { LayoutWrapperProps } from "@/layouts/public/types/layout";
import SidebarMobile from "../sidebar-mobile";

export function LayoutWrapperFull(props: LayoutWrapperProps) {
    const { children } = props;

    return (
        <div className="bg-white w-full">
            <div className="sticky top-0 z-50">
                <TopNavigation />
            </div>
            <div className="">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export function LayoutWrapper(props: LayoutWrapperProps) {
    return <LayoutWrapperFull {...props} />
}

export function LayoutWrapperMobile(props: LayoutWrapperProps) {
    const { children } = props;

    return (
        <div className="bg-white w-full">
            <div className="sticky top-0 z-50">
                <SidebarMobile />
            </div>
            <div className="">
                {children}
            </div>
            <Footer />
        </div>
    )
}
