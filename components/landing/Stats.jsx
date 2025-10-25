import { stats } from "@/constants";
import ContentWrapper from "../ContentWrapper"

export default function Stats() {
    return (
        <section className="pt-26 pb-16">
            <ContentWrapper>
                <img
                    src="/map.svg"
                    alt="team image"
                    loading="lazy"
                />
                <div className="max-w-[875px] w-full mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
                    {stats.map((stat, index) => (
                        <div 
                            className={`text-center flex flex-col gap-2 items-center border-neutral-300
                                justify-center ${index !== stats.length - 1 ? 'md:border-r md:pr-7' : ''}`}
                            key={index}
                        >
                            <span className="font-[700] text-3xl flex items-center gap-1.5">
                                {stat.value}
                                <span className="text-xl text-gray-700">{stat.sign}</span>
                            </span>
                            <p className="text-sm">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        </section>
    )
}