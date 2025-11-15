import { faqItems } from "@/constants"
import ContentWrapper from "../ContentWrapper"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from "next/link"

export default function Faq() {
    return (
        <section
            className="overflow-hidden pt-10 pb-23 relative
            "
        >
            <ContentWrapper>
                {/* Header */}
                <div className="max-w-3xl w-full mx-auto text-center flex flex-col justify-center items-center">
                    <h2 className="text-balance text-4xl font-[600] lg:text-6xl">Frequently Asked Questions</h2>
                    <p
                        className="mx-auto mt-8 max-w-2xl text-balance leading-[1.8]"
                    >
                        Discover quick and comprehensive answers to common questions about our platform, services, and features
                    </p>
                </div>
                {/* Body */}
                <div className="mx-auto mt-12 max-w-[825px]">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}
                            >
                                <AccordionItem
                                    value={item.id}
                                    className="border-none py-1"
                                >
                                    <AccordionTrigger className="cursor-pointer hover:no-underline font-sans text-[0.95rem] font-[600]">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-[0.9rem] leading-[1.75] text-gray-600">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>
                    <p className="mt-16 text-center text-[0.9rem] max-w-sm md:max-w-full mx-auto text-gray-800 font-[500]">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-[700] hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </ContentWrapper>
        </section>
    )
}