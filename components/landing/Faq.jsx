import { faqItems } from "@/constants"
import ContentWrapper from "../ContentWrapper"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from "next/link"

export default function Faq() {
    return (
        <section
            className="overflow-hidden pt-10 pb-23"
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
                <div className="mx-auto mt-12 max-w-[725px]">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-gray-50 w-full rounded-2xl p-1 border">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card peer rounded-xl border-none
                                    px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                                >
                                    <AccordionTrigger className="cursor-pointer text-[0.925rem] hover:no-underline font-sans">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-[0.9rem] leading-[1.75]">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>
                    <p className="mt-12 text-center text-[0.9rem] max-w-sm md:max-w-full mx-auto">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-[600] hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </ContentWrapper>
        </section>
    )
}