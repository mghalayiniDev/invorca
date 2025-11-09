import { termsOfService } from "@/constants"

export default function TermsOfService() {
    return (
        <>
            <span className="text-[3.125rem] font-[500]">
                Terms of Service
            </span>
            <div className="flex flex-col gap-6 mt-22">
                <p className="text-[1.075rem] text-gray-600 font-[500]">
                    Last updated: November 9, 2025
                </p>
                <p className="text-[1.15rem] font-[500] leading-[1.8]">
                    PLEASE READ THESE TERMS OF SERVICE CAREFULLY. IT CONTAINS IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES AND OBLIGATIONS. THESE INCLUDE LIMITATIONS ON LIABILITY AND A DISCLAIMER OF ALL WARRANTIES
                </p>
            </div>
            <div className="mt-22 flex flex-col gap-22">
                {termsOfService.map((section, index) => (
                    <div key={index} className="flex flex-col gap-4.5">
                        <span className="text-[1.75rem] font-[600] uppercase">{section.header}</span>
                        <p className="text-gray-700 font-[500] leading-[1.95] text-[1.05rem]">{section.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}