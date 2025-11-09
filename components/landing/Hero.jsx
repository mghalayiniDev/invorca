"use client"

import ContentWrapper from "@/components/ContentWrapper"
import { brands } from "@/constants"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
    return (
        <section
            className="pt-32 pb-18 relative 
                bg-[url('/bg-with-grid.png')] bg-cover bg-center bg-no-repeat"
        >
            <ContentWrapper className="overflow-hidden text-center flex flex-col">
                <Link
                    href="/"
                    className="hover:bg-background bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-7 shadow-md shadow-zinc-950/5 transition-colors duration-300"
                >
                    <span className="text-foreground text-sm">Send Invoices in Seconds</span>
                    <span className="block h-4 w-0.5 border-l bg-white"></span>
                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                            <span className="flex size-6">
                                <ArrowRight className="m-auto size-3" />
                            </span>
                            <span className="flex size-6">
                                <ArrowRight className="m-auto size-3" />
                            </span>
                        </div>
                    </div>
                </Link>
                <h1 
                    className="mx-auto max-w-2xl lg:max-w-4xl text-5xl font-semibold md:text-7xl xl:text-[5.25rem] mt-6"
                >
                    Generate Invoices in Seconds Effortlessly
                </h1>
                <p
                    className="mx-auto mt-8 max-w-2xl text-balance text-[1.15rem] leading-[1.8]"
                >
                    Simplify your billing process with our easy-to-use platform. Create, and send invoices easily, all from one place.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row w-full">
                    <button 
                        className="text-[0.95rem] border border-brand-700 bg-brand-700 text-white 
                        rounded-md px-8 py-[12px] font-[500] cursor-pointer flex items-center gap-3 hover:bg-brand-800 justify-center max-w-[275px] md:max-w-[175px] w-full"
                    >
                        Get started
                        <ArrowRight 
                            width={15}
                            height={15}
                        />
                    </button>
                    <Link 
                        className="text-[0.95rem] border hover:bg-neutral-100/70
                        rounded-md px-8 py-[12px] font-[600] cursor-pointer max-w-[275px] md:max-w-[175px] w-full"
                        href="/#pricing"
                        onClick={(e) => {
                            e.preventDefault()
                            const section = document.getElementById("pricing")
                            if (section) {
                                section.scrollIntoView({ behavior: "smooth" })
                                window.history.pushState(null, "", "/")
                            }
                        }}
                    >
                        View pricing
                    </Link>
                </div>
                <img 
                    className="w-full h-[400px] md:h-[650px] mt-18 inset-shadow-2xs ring-background bg-background relative 
                        overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1"
                    src="/circle_un3f39.webp"
                    alt="Hero image"
                />
                <div className="relative m-auto max-w-5xl px-6 mt-12">
                    <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                        {brands.map((logo, idx) => (
                            <div key={idx} className="flex">
                                <img
                                    className={`mx-auto w-fit h-${logo.h}`}
                                    src={logo.src}
                                    alt={logo.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </ContentWrapper>
        </section>
    )
}