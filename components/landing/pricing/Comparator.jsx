import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { comparatorFeatures } from "@/constants"
import { Check, Cpu, X } from "lucide-react"
import Link from "next/link"

export default function Comparator() {
    return (
        <div className="mt-12 lg:mt-24">
            {/* Medium devices*/}
            <table className="w-full hidden lg:table">
                <thead>
                    <tr>
                        <th className="w-1/4"></th>
                        <th className="p-3 w-1/4">
                            <div className="flex flex-col items-center gap-3.5">
                                <span className="font-[600] text-brand-800">Free</span>
                                <Button 
                                    asChild variant="outline" 
                                    className={`w-full max-w-[130px] text-[0.75rem] font-[500]`}>
                                    <Link href="">
                                        Get started
                                    </Link>
                                </Button>
                            </div>
                        </th>
                        <th className="p-4 bg-gray-50 border-x border-t w-1/4 shadow-lg">
                            <div className="flex flex-col items-center gap-3.5">
                                <span className="font-[600] text-brand-800">Pro</span>
                                <Button 
                                    asChild variant="outline" 
                                    className={`w-full max-w-[140px] text-[0.75rem] font-[500] hover:bg-gray-50/50`}>
                                    <Link href="">
                                        Upgrade to pro
                                    </Link>
                                </Button>
                            </div>
                        </th>
                        <th className="p-4 w-1/4">
                           <div className="flex flex-col items-center gap-3.5">
                                <span className="font-[600] text-brand-800">Business</span>
                                <Button 
                                    asChild variant="outline" 
                                    className={`w-full max-w-[165px] text-[0.75rem] font-[500]`}>
                                    <Link href="">
                                        Upgrade to business
                                    </Link>
                                </Button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-1/4">
                            <div className="flex items-center gap-3 text-[0.875rem] font-[500] py-2">
                                <Cpu 
                                    width={14}
                                    height={14}
                                />
                                Features
                            </div>
                        </td>
                        <td className="w-1/4"></td>
                        <td className="w-1/4 bg-gray-50 border-x shadow-lg"></td>
                        <td className="w-1/4"></td>
                    </tr>
                    {comparatorFeatures.map((feature, index) => (
                        <tr
                            key={index}
                            className={`${index !== comparatorFeatures.length-1 && "border-b"}`}
                        >
                            <td className={`${index === 0 && "pt-7"} py-4 text-[0.85rem] text-gray-800 font-[500]`}>
                                {feature.feature}
                            </td>
                            <td className="text-center">
                                {typeof feature.free === "boolean" ? (
                                    feature.free ? (
                                        <Check className="size-3.5 text-green-800 mx-auto" /> 
                                    ) : (
                                        <X className="size-3.5 text-red-700 mx-auto" /> 
                                    )
                                ) : (
                                    <span className="text-[0.85rem] font-[500]">
                                        {feature.free}
                                    </span>
                                )}
                            </td>
                            <td className={`bg-gray-50 border-x border-b text-center`}>
                                {typeof feature.pro === "boolean" ? (
                                    feature.pro ? (
                                        <Check className="size-3.5 text-green-800 mx-auto" /> 
                                    ) : (
                                        <X className="size-3.5 text-red-700 mx-auto" /> 
                                    )
                                ) : (
                                    <span className="text-[0.85rem] font-[500]">
                                        {feature.pro}
                                    </span>
                                )}
                            </td>
                            <td className="text-center">
                                {typeof feature.business === "boolean" ? (
                                    feature.business ? (
                                        <Check className="size-3.5 text-green-800 mx-auto" /> 
                                    ) : (
                                        <X className="size-3.5 text-red-700 mx-auto" /> 
                                    )
                                ) : (
                                    <span className="text-[0.85rem] font-[500]">
                                        {feature.business}
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Small devices*/}
            <div className="lg:hidden flex flex-col gap-5">
                <Tabs defaultValue="free" className="w-full">
                    <TabsList className="w-full h-[48px] rounded-none bg-white border-b py-0">
                        <TabsTrigger 
                            value="free" 
                            className="text-brand-700 font-[700] cursor-pointer
                            data-[state=active]:shadow-none data-[state=active]:border-b-brand-700 rounded-none
                            border-b-2 h-full pb-2.5"
                        >
                            Free
                        </TabsTrigger>
                        <TabsTrigger 
                            value="pro" 
                            className="text-brand-700 font-[700] cursor-pointer
                            data-[state=active]:shadow-none data-[state=active]:border-b-brand-700 rounded-none
                            border-b-2 h-full pb-2.5"
                        >
                            Pro
                        </TabsTrigger>
                        <TabsTrigger 
                            value="business" 
                            className="text-brand-700 font-[700] cursor-pointer
                            data-[state=active]:shadow-none data-[state=active]:border-b-brand-700 rounded-none
                            border-b-2 h-full pb-2.5"
                        >
                            Business
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="free" className="mt-8 flex flex-col">
                        <span className="bg-gray-50 px-6 py-3 rounded-lg font-[600] text-[0.875rem] border flex items-center gap-3.5 mb-8">
                            Features
                        </span>
                        {comparatorFeatures.map((feature, index) => (
                            <div 
                                key={index} 
                                className={`grid grid-cols-2 gap-3 border-b items-center 
                                px-6 pb-4.5 ${index !== 0 && "pt-4.5"} ${index === comparatorFeatures.length-1 && "border-b-0 pb-0"}`}
                            >
                                <span className="text-[0.85rem] text-gray-800 font-[500]">
                                    {feature.feature}
                                </span>
                                <span className="w-full text-center">
                                    {typeof feature.free === "boolean" ? (
                                    feature.free ? (
                                        <Check className="size-3.5 text-green-800 mx-auto" /> 
                                    ) : (
                                        <X className="size-3.5 text-red-700 mx-auto" /> 
                                    )
                                ) : (
                                    <span className="text-[0.85rem] font-[500]">
                                        {feature.free}
                                    </span>
                                )}
                                </span>
                            </div>
                        ))}
                        <Button
                            asChild variant="outline" 
                            className={`mt-8 py-3 w-full h-full`}>
                            <Link href="">
                                Get started for free
                            </Link>
                        </Button>
                    </TabsContent>
                    <TabsContent value="pro" className="mt-8 flex flex-col">
                        <span className="bg-gray-50 px-6 py-3 rounded-lg font-[600] text-[0.875rem] border flex items-center gap-3.5 mb-8">
                            Features
                        </span>
                        {comparatorFeatures.map((feature, index) => (
                            <div 
                                key={index} 
                                className={`grid grid-cols-2 gap-3 border-b items-center 
                                px-6 pb-4.5 ${index !== 0 && "pt-4.5"} ${index === comparatorFeatures.length-1 && "border-b-0 pb-0"}`}
                            >
                                <span className="text-[0.85rem] text-gray-800 font-[500]">
                                    {feature.feature}
                                </span>
                                <span className="w-full text-center">
                                    {typeof feature.pro === "boolean" ? (
                                    feature.pro ? (
                                        <Check className="size-3.5 text-green-800 mx-auto" /> 
                                    ) : (
                                        <X className="size-3.5 text-red-700 mx-auto" /> 
                                    )
                                ) : (
                                    <span className="text-[0.85rem] font-[500]">
                                        {feature.pro}
                                    </span>
                                )}
                                </span>
                            </div>
                        ))}
                        <Button
                            asChild variant="outline" 
                            className={`mt-8 py-3 w-full h-full border-brand-700 bg-brand-700 text-white hover:bg-brand-800/90 hover:border-brand-700 hover:text-white`}>
                            <Link href="">
                                Upgrade to pro
                            </Link>
                        </Button>
                    </TabsContent>
                    <TabsContent value="business" className="mt-8 flex flex-col">
                        <span className="bg-gray-50 px-6 py-3 rounded-lg font-[600] text-[0.875rem] border flex items-center gap-3.5 mb-8">
                            Features
                        </span>
                        {comparatorFeatures.map((feature, index) => (
                            <div 
                                key={index} 
                                className={`grid grid-cols-2 gap-3 border-b items-center 
                                px-6 pb-4.5 ${index !== 0 && "pt-4.5"} ${index === comparatorFeatures.length-1 && "border-b-0 pb-0"}`}
                            >
                                <span className="text-[0.85rem] text-gray-800 font-[500]">
                                    {feature.feature}
                                </span>
                                <span className="w-full text-center">
                                    {typeof feature.business === "boolean" ? (
                                    feature.business ? (
                                        <Check className="size-3.5 text-green-800 mx-auto" /> 
                                    ) : (
                                        <X className="size-3.5 text-red-700 mx-auto" /> 
                                    )
                                ) : (
                                    <span className="text-[0.85rem] font-[500]">
                                        {feature.business}
                                    </span>
                                )}
                                </span>
                            </div>
                        ))}
                        <Button
                            asChild variant="outline" 
                            className={`mt-8 py-3 w-full h-full`}>
                            <Link href="">
                                Upgrade to business
                            </Link>
                        </Button>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}