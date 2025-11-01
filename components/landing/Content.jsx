import { features } from "@/constants"
import ContentWrapper from "../ContentWrapper"

export default function Content() {
    return (
        <section 
            className="py-18"
            id="solution"    
        >
            <ContentWrapper>
                {/* Header */}
                <div className="max-w-3xl w-full mx-auto text-center flex flex-col justify-center items-center mb-20">
                    <h2 className="text-balance text-4xl font-[600] lg:text-6xl max-w-md lg:max-w-[100%]">Streamline Your Invoicing Process Effortlessly</h2>
                      <p
                        className="mx-auto mt-8 max-w-2xl text-balance leading-[1.8]"
                    >
                        Manage and track invoices with ease. Automate repetitive tasks, stay on top of payments, and keep your business organized.
                    </p>
                </div>
                <img
                    className="rounded-(--radius)"
                    src="/content.webp"
                    alt="team image"
                    loading="lazy"
                />
                {/* Features */}
                <div className="relative mx-auto grid justify-center md:justify-start md:grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4 mt-16 md:max-w-3xl md:mx-auto lg:max-w-full lg:mx-0">
                    {features.map((feature, index) => (
                        <div className={`space-y-3 ${index !== features.length-1 ? 'lg:border-r' : ''}`} key={index}>
                            <div className="flex items-center gap-2">
                                <feature.icon className="size-4" />
                                <span className="text-[0.915rem] font-[700]">{feature.title}</span>
                            </div>
                            <p className="text-muted-foreground text-[0.85rem] font-[500] leading-[1.825]">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        </section>
    )
}