"use client"

import { dashboardLinks } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSidebarStore } from "@/stores/sidebarStore"
import { useEffect } from "react"
import { Atom } from "lucide-react"

export default function Sidebar() {
    const pathname = usePathname()
    const { isOpen } = useSidebarStore()

    return (
        <aside 
            className={`py-5 border-r h-screen overflow-y-auto overflow-x-hidden
            max-w-[250px] xl:max-w-[300px] flex-col gap-7.5 bg-gray-50 flex ${isOpen ? 'lg:w-full' : 'w-fit'}  `}
        >
            <div className="px-6 pb-3.5 border-b">
                <Link
                    href="/"
                    className="flex items-center gap-3.5 font-bold text-[1.125rem] leading-none select-none w-fit"
                >
                    <div className="px-[8px] py-[7px] rounded-lg bg-brand-600 text-white">
                        <Atom size={15} />
                    </div>
                    <span className={`${isOpen ? 'hidden lg:block' : 'hidden'}`}>
                        Invorca
                    </span>
                </Link>
            </div>
            <div className="flex flex-col gap-9 px-4">
                {dashboardLinks.map((section, index) => (
                    <div 
                        className="flex flex-col gap-5"
                        key={index}
                    >
                        <span className={`px-2 text-[0.8rem] font-[600] uppercase ${isOpen ? 'hidden lg:block' : 'hidden'}`}>
                            {section.header}
                        </span>
                        <div className="flex flex-col gap-5.5">
                            {section.links.map((link, linkIndex) => (
                                <Link
                                    key={linkIndex}
                                    href={link.path}
                                    className={`
                                        px-2 text-[0.825rem] font-[500] text-neutral-800 flex shrink-0
                                        items-center gap-3 justify-center ${isOpen ? 'lg:justify-start' : 'justify-center'} 
                                        ${pathname === link.path ? 'bg-gray-200/50 py-2 px-4 rounded-md' : ''}`}
                                >
                                    <link.icon 
                                        width={isOpen ? 15 : 18}
                                        height={isOpen ? 15 : 18}
                                        className={`shrink-0 mx-auto lg:mx-0`}
                                    />
                                    <span className={`${isOpen ? 'hidden lg:block' : 'hidden'}`}>
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}