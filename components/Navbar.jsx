"use client"

import ContentWrapper from "./ContentWrapper"
import Logo from "./Logo"
import { ArrowRight, Menu } from "lucide-react"
import { menuItems } from "@/constants"
import { useEffect, useState } from "react"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerOverlay,
    DrawerTitle
} from "@/components/ui/drawer"
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter()
    const [isDrawerActive, setIsDrawerActive] = useState(false)
    const [isSmallDevice, setIsSmallDevice] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            const small = window.innerWidth < 768
            setIsSmallDevice(prev => {
                if (prev !== small) return small
                    return prev 
                }
            )
            setIsDrawerActive(prev => (small ? prev : false))
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleClick = (href) => {
        const id = href.replace("/#", "").replace("#", "")
        router.push(`/#${id}`)
        const scrollToSection = () => {
            const section = document.getElementById(id)
            if (section) {
                section.scrollIntoView({ behavior: "smooth" })
                window.history.replaceState(null, "", "/")
            } else {
                requestAnimationFrame(scrollToSection)
            }
        }
        scrollToSection()
    }

    return (
        <nav className="py-2.5 border-b">
            <ContentWrapper className="flex items-center justify-between gap-4.5">
                <Logo />
                <div className="mx-auto hidden size-fit md:block">
                    <ul className="flex md:gap-4 lg:gap-6 text-sm">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    className="text-muted-foreground hover:text-accent-foreground block duration-150 md:text-[0.8rem] lg:text-sm cursor-pointer"
                                    onClick={() => handleClick(item.href)}
                                >
                                    <span>{item.name}</span>
                                </button>
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
                        className="text-[0.785rem] lg:text-[0.835rem] border border-brand-700 bg-brand-700 text-white 
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
                        className="px-2 py-[8px] border bg-gray-50 rounded-md md:hidden hover:bg-gray-100/80 hover:shadow-sm cursor-pointer"
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
                    <DrawerContent className="py-10">   
                        <DrawerHeader>
                            <DrawerTitle></DrawerTitle>
                            <DrawerDescription className="flex flex-col gap-10 mt-6">
                                {menuItems.map((item, index) => (
                                    <span key={index}>
                                        <button
                                            className="text-black font-[600] text-lg hover:text-gray-800 cursor-pointer"
                                            onClick={() => {
                                                handleClick(item.href)
                                                setIsDrawerActive(false)}}
                                        >
                                            <span>{item.name}</span>
                                        </button>
                                    </span>
                                ))}
                            </DrawerDescription>
                        </DrawerHeader>
                    </DrawerContent>
                </Drawer>
            )}
        </nav>
    )
}