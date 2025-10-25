import ContentWrapper from "../ContentWrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, X } from 'lucide-react'
import { Button } from "../ui/button"
import Link from "next/link"
import DecorativeCircles, { plans } from "@/constants"
import Comparator from "./pricing/Comparator"

export default function Pricing() {
    return (
        <section className="pt-12 pb-26" id="pricing">
            <ContentWrapper>
                {/* Header */}
                <div className="max-w-3xl w-full mx-auto text-center flex flex-col justify-center items-center">
                    <h2 className="text-balance text-4xl font-[600] lg:text-6xl">Pricing that Scales with You</h2>
                    <p
                        className="mx-auto mt-8 max-w-2xl text-balance leading-[1.8]"
                    >
                        Flexible pricing built for every stage of your journey. Grow without limits, upgrade seamlessly, and pay only for what you need
                    </p>
                </div>
                {/* Grid */}
                <div className="mt-12 grid gap-8 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative ${plan.recommended ? 'border-2 border-brand-600 shadow-lg' : ''} ${index === plans.length -1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            {plan.recommended && (
                                <span className="bg-brand-700 absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-brand-700 ring-offset-1 ring-offset-brand-700">
                                    Recommended
                                </span>
                            )}
                            <CardHeader className="relative overflow-hidden">
                                {/* Decorative Circles */}
                                <DecorativeCircles />
                                <CardTitle className="font-[600] text-brand-700">{plan.name}</CardTitle>
                                 <span className="my-3 text-[42px] font-bold">
                                    ${plan.price}
                                    <span className="text-base font-medium text-body-color">
                                    / month
                                    </span>
                                </span>
                                <CardDescription className="text-[0.85rem] text-neutral-600">{plan.description}</CardDescription>
                                <Button 
                                    asChild variant="outline" 
                                    className={`mt-4 w-full ${plan.recommended ? 'border-brand-700 bg-brand-700 text-white hover:bg-brand-800/90 hover:border-brand-700 hover:text-white' : ''}`}>
                                    <Link href="">
                                        {plan.name === "Free" ? "Get Started for Free" : `Upgrade to ${plan.name}`}
                                    </Link>
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {plan.features.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2"
                                        >
                                            {item.included ?  
                                                <Check className="size-3 text-green-800" /> 
                                                :  
                                                <X className="size-3 text-red-700" /> 
                                            }                       
                                            {item.feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* Comparator */}
                <Comparator />
            </ContentWrapper>
        </section>
    )
}