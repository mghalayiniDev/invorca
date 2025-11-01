import ContentWrapper from "../ContentWrapper"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="py-26" id="testimonials">
            <ContentWrapper>
                {/* Header */}
                <div className="max-w-3xl w-full mx-auto text-center flex flex-col justify-center items-center mb-20">
                    <h2 className="text-balance text-4xl font-[600] lg:text-6xl max-w-md lg:max-w-[100%]">Build by makers, loved by thousand developers</h2>
                    <p
                        className="mx-auto mt-8 max-w-2xl text-balance leading-[1.8]"
                    >
                        Hear from developers who trust our platform to simplify their workflow and boost productivity every day.
                    </p>
                </div>
                {/* Testimonials */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 md:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <img
                                className="h-8 w-fit"
                                src="/quote.png"
                                alt="Nike Logo"
                                height="28"
                                width="auto"
                            />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Invorca has transformed the way I manage invoices and billing. Its intuitive dashboard, automation tools, and customizable templates have drastically sped up my workflow. The flexibility to tailor every detail lets me create a seamless experience for my clients. Invorca is truly a game-changer for modern businesses</p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/shekinah.webp"
                                            alt="Shekinah Tshiokufila"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>ST</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Shekinah Tshiokufila</cite>
                                        <span className="text-muted-foreground block text-sm">Software Ingineer</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Invorca has completely streamlined our billing process. Creating, sending, and tracking invoices has never been this easy"</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/jonathan.webp"
                                            alt="Jonathan Yombo"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>JY</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Jonathan Yombo</cite>
                                        <span className="text-muted-foreground block text-sm">Software Ingineer</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="relative">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Thanks to Invorca, our team saves hours every week. Automation features and reminders are a real game-changer</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr] ">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/yucel.webp"
                                            alt="Yucel Faruksahan"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>YF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Yucel Faruksahan</cite>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>The analytics dashboard in Invorca helps us track payments and make better decisions for our business growth!</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3 items-center">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/rodrigo.webp"
                                            alt="Rodrigo Aguilar"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>RA</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Rodrigo Aguilar</p>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </ContentWrapper>
        </section>
    )
}