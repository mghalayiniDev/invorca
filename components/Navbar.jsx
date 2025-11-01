"use client"

import Link from "next/link"
import ContentWrapper from "./ContentWrapper"
import Logo from "./Logo"
import { ArrowRight, Menu } from "lucide-react"
import { menuItems } from "@/constants"
import { useEffect, useState } from "react"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

export default function Navbar() {
    const [isDrawerActive, setIsDrawerActive] = useState(false)
    const [isSmallDevice, setIsSmallDevice] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const small = window.innerWidth < 768
            setIsSmallDevice(prev => {
            if (prev !== small) return small
                return prev // prevent unnecessary renders
            })
            setIsDrawerActive(prev => (small ? prev : false))
        }
        // Run once on mount
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <nav className="py-2.5 border-b">
            <ContentWrapper className="flex items-center justify-between gap-4.5">
                <Logo />
                <div className="mx-auto hidden size-fit md:block">
                    <ul className="flex md:gap-4 lg:gap-6 text-sm">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="text-muted-foreground hover:text-accent-foreground block duration-150 md:text-[0.8rem] lg:text-sm"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        const id = item.href.replace("/#", "").replace("#", "")
                                        const section = document.getElementById(id)
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" })
                                            window.history.pushState(null, "", "/")
                                        }
                                    }}
                                >
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-stretch gap-2 md:gap-9.5">
                    <button 
                        className="hidden lg:block text-[0.835rem] font-[500] cursor-pointer hover:text-gray-700"
                    >
                        Sign in
                    </button>
                    <button 
                        className="text-[0.725rem] md:text-[0.785rem] lg:text-[0.835rem] border border-brand-700 bg-brand-700 text-white 
                        rounded-md px-5 py-[8px] font-[500] cursor-pointer flex items-center gap-3 hover:bg-brand-800"
                    >
                        <span className="lg:hidden">Get started</span>
                        <span className="hidden lg:block">Sign up</span>
                        <ArrowRight 
                            width={15}
                            height={15}
                            className="hidden lg:block"
                        />
                    </button>
                    <button 
                        className="px-2 py-[8px] border bg-gray-100 rounded-md md:hidden shadow-sm hover:bg-gray-200/80 hover:shadow-md cursor-pointer"
                        onClick={() => {
                            if (isSmallDevice) {
                                setIsDrawerActive(true)
                            }
                        }}    
                    >
                        <Menu 
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
            </ContentWrapper>
            {/* Drawer for small devices */}
            {isSmallDevice && (
                <Drawer open={isDrawerActive} onOpenChange={setIsDrawerActive}>
                    <DrawerOverlay className="bg-black/30 backdrop-blur-[4px]" />
                    <DrawerContent className="py-6">   
                        <DrawerHeader>
                            <DrawerTitle></DrawerTitle>
                            <DrawerDescription className="flex flex-col gap-7 mt-4.5">
                                {menuItems.map((item, index) => (
                                    <span key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-black font-[500] text-lg hover:text-gray-800"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                const id = item.href.replace("/#", "").replace("#", "")
                                                const section = document.getElementById(id)
                                                if (section) {
                                                    section.scrollIntoView({ behavior: "smooth" })
                                                    window.history.pushState(null, "", "/")
                                                }
                                                setIsDrawerActive(false)
                                            }}
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    </span>
                                ))}
                                <button 
                                    className="text-[1rem] border border-brand-700 bg-brand-700 text-white 
                                    rounded-md px-5 py-[10px] font-[500] cursor-pointer flex items-center gap-3 hover:bg-brand-800
                                    max-w-[200px] mx-auto w-full justify-center
                                    "
                                >
                                    <span>Get started</span>
                                    <ArrowRight 
                                        width={15}
                                        height={15}
                                        className="hidden lg:block"
                                    />
                                </button>
                            </DrawerDescription>
                        </DrawerHeader>
                    </DrawerContent>
                </Drawer>
            )}
        </nav>
    )
}