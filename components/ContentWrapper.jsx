import { cn } from "@/lib/utils";

export default function ContentWrapper({ children, className }) {
    return (
        <div
            className={cn(
                "max-w-[1100px] w-full mx-auto px-5",
                className
            )}
        >  
            {children}
        </div>
    )
}