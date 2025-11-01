"use client"

import Link from "next/link"
import ContentWrapper from "./ContentWrapper"
import Logo from "./Logo"
import { ArrowRight, Menu } from "lucide-react"
import { menuItems } from "@/constants"

export default function Navbar() {
    return (
        <nav className="py-2.5  border-b">
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
                <div className="flex items-stretch gap-6.5 md:gap-9.5">
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
                    <button>
                        <Menu 
                            width={20}
                            height={20}
                            className="lg:hidden cursor-pointer"
                        />
                    </button>
                </div>
            </ContentWrapper>
        </nav>
    )
}