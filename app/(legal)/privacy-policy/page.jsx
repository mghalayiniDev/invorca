import { privacyPolicy } from "@/constants"

export default function PrivacyPolicy() {
    return (
        <>
            <span className="text-[3.125rem] font-[500]">
                Privacy Policy
            </span>
            <div className="mt-26 flex flex-col gap-22">
                {privacyPolicy.map((section, index) => (
                    <div key={index} className="flex flex-col gap-4.5">
                        <span className="text-[1.75rem] font-[600] uppercase">{section.header}</span>
                        <p className="text-gray-700 font-[500] leading-[1.95] text-[1.05rem]">{section.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}