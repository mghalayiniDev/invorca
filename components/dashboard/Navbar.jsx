"use client"

import { useSidebarStore } from "@/stores/sidebarStore"
import { PanelRight } from "lucide-react"

export default function Navbar() {
    const { toggleIsOpen, isOpen } = useSidebarStore()

    return (
        <>
            <nav className="h-[64px] border-b px-6 lg:px-9 py-3.5 flex items-center justify-between gap-5">
                <div className="flex items-center gap-6.5">
                    <button 
                        className="cursor-pointer hidden lg:block"
                        onClick={toggleIsOpen}    
                    >
                        <PanelRight
                            width={18}
                            height={18}
                        />
                    </button>
                    <span className="text-[0.8rem] lg:text-sm">
                        Welcome back, <span className="font-[600]">User</span>
                    </span>
                </div>
                <div className="flex items-center gap-4">
                </div>
            </nav>
        </>
    )
}