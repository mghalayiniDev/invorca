"use client"

import { legalItems, menuItems } from "@/constants"
import ContentWrapper from "./ContentWrapper"
import Logo from "./Logo"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Footer() {
    const router = useRouter()

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
        <footer className="mt-12 border-t py-16">
            <ContentWrapper className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-8 ">
                <div className="flex flex-col gap-4">
                    <span className="w-fit">
                        <Logo />
                    </span>
                    <p className="text-[0.85rem] text-gray-800 mt-2">
                        Simplify your billing process with our easy-to-use platform. Create and send invoices easily
                    </p>
                    <span className="text-[0.825rem] font-[500]">
                        © Invorca {new Date().getFullYear()}
                    </span>
                </div>
                <div className="flex flex-col gap-6 md:mx-auto">
                    <span className="font-[700] text-[1.125rem]">Conetnt</span>
                    <ul className="list-none flex flex-col gap-2.5">
                        {menuItems.map((item, idx) => (
                            <li key={idx} className="w-fit">
                                <button
                                    className="text-[0.85rem] font-[500] text-gray-700 hover:text-black cursor-pointer"
                                    onClick={() => handleClick(item.href)}
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-6 md:mx-auto">
                    <span className="font-[700] text-[1.125rem]">Legal</span>
                    <ul className="list-none flex flex-col gap-2.5">
                        {legalItems.map((item, idx) => (
                            <li key={idx} className="w-fit">
                                <Link
                                    href={`${item.href}`}
                                    className="text-[0.85rem] font-[500] text-gray-700 hover:text-black"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </ContentWrapper>
        </footer>
    )
}