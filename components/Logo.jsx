import { Atom } from "lucide-react"
import Link from "next/link"

export default function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center gap-3.5 font-bold text-[1.125rem] leading-none select-none w-fit"
        >
            <div className="px-[8px] py-[7px] rounded-lg bg-brand-600 text-white">
                <Atom size={15} />
            </div>
            Invorca
        </Link>
    )
}