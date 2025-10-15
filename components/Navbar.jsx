import Link from "next/link"
import ContentWrapper from "./ContentWrapper"
import Logo from "./Logo"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Solution', href: '#solution' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
    return (
        <nav className="py-2.5  border-b">
            <ContentWrapper className="flex items-center justify-between gap-4.5">
                <Logo />
                <div className="mx-auto hidden size-fit lg:block">
                    <ul className="flex gap-6 text-sm">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-stretch gap-9.5">
                    <button 
                        className="text-[0.835rem] font-[500] cursor-pointer hover:text-gray-700"
                    >
                        Sign in
                    </button>
                    <button 
                        className="text-[0.835rem] border border-brand-700 bg-brand-700 text-white 
                        rounded-md px-5 py-[8px] font-[500] cursor-pointer flex items-center gap-3 hover:bg-brand-800"
                    >
                        Sign up
                        <ArrowRight 
                            width={15}
                            height={15}
                        />
                    </button>
                </div>
            </ContentWrapper>
        </nav>
    )
}