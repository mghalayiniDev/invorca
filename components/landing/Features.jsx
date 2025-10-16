import ContentWrapper from "../ContentWrapper"
import { Card, CardContent } from '@/components/ui/card'
import { FeaturesAutomatedReports, FeaturesCircleBackground, FeaturesFingerprintBackground, FeaturesInstantInvocing } from "@/constants"
import { Shield, Users } from 'lucide-react'

export default function Features() {
    return (
        <section 
            className="overflow-hidden pt-23 pb-16"
            id="#features"    
        >
            <ContentWrapper>
                {/* Header */}
                <div className="max-w-3xl w-full mx-auto text-center flex flex-col justify-center items-center">
                    <span className="text-brand-700 font-[600] md:text-[1.175rem]">Smart Billing</span>
                    <h2 className="text-balance text-4xl font-[600] max-w-md lg:max-w-[100%] lg:text-6xl">The smarter way to manage and send invoices</h2>
                </div>
                {/* Features grid */}
                <div className="pt-20 pb-14">
                    <div>
                        <div className="relative">
                            <div className="relative z-10 grid grid-cols-6 gap-3">
                                <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
                                    <CardContent className="relative m-auto size-fit pt-6">
                                        <div className="relative flex h-24 w-56 items-center">
                                            <FeaturesCircleBackground />
                                            <span className="mx-auto block w-fit text-5xl font-semibold">100%</span>
                                        </div>
                                        <h2 className="mt-6 text-center text-3xl font-semibold">Customizable</h2>
                                    </CardContent>
                                </Card>
                                <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                                    <CardContent className="pt-6">
                                        <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                           <FeaturesFingerprintBackground />
                                        </div>
                                        <div className="relative z-10 mt-6 space-y-2 text-center">
                                            <span className="group-hover:text-secondary-950 text-lg font-medium transition">Secure by default</span>
                                            <p className="text-foreground text-[0.975rem] mt-2">Built with strong security layers ensuring your data stays private and fully protected.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                                    <CardContent className="pt-6">
                                        <div className="pt-6 lg:px-6">
                                            <FeaturesInstantInvocing />
                                        </div>
                                        <div className="relative z-10 mt-14 space-y-2 text-center">
                                            <span className="group-hover:text-secondary-950 text-lg font-medium transition">Instant Invoicing</span>
                                            <p className="text-foreground text-[0.975rem] mt-2">Generate and send invoices in seconds, keeping your workflow smooth and efficient.</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                                    <CardContent className="grid pt-6 sm:grid-cols-2">
                                        <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                            <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                                <Shield
                                                    className="m-auto size-5"
                                                    strokeWidth={1}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <span className="group-hover:text-secondary-950 text-lg font-medium transition">Real-Time Insights</span>
                                                <p className="text-foreground text-[0.975rem] mt-2">Visualize your data clearly and track performance trends with ease.</p>
                                            </div>
                                        </div>
                                        <div className="rounded-tl-(--radius) relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
                                            <div className="absolute left-3 top-2 flex gap-1">
                                                <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                                <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                                <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                            </div>
                                           <FeaturesAutomatedReports />
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                                    <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                                        <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                            <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                                <Users
                                                    className="m-auto size-6"
                                                    strokeWidth={1}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <span className="group-hover:text-secondary-950 text-lg font-medium transition">Never Miss a Payment</span>
                                                <p className="text-foreground text-[0.975rem] mt-2">Send timely reminders to your clients and keep your cash flow steady and reliable.</p>
                                            </div>
                                        </div>
                                        <div className="before:bg-(--color-border) relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                                            <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                                                <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                                    <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Likeur</span>
                                                    <div className="ring-background size-7 ring-4">
                                                        <img
                                                            className="size-full rounded-full"
                                                            src="https://avatars.githubusercontent.com/u/102558960?v=4"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                                                    <div className="ring-background size-8 ring-4">
                                                        <img
                                                            className="size-full rounded-full"
                                                            src="https://avatars.githubusercontent.com/u/47919550?v=4"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">M. Irung</span>
                                                </div>
                                                <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                                    <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">B. Ng</span>
                                                    <div className="ring-background size-7 ring-4">
                                                        <img
                                                            className="size-full rounded-full"
                                                            src="https://avatars.githubusercontent.com/u/31113941?v=4"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </section>
    )
}