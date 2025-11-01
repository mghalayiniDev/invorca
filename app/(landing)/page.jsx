import Footer from "@/components/Footer"
import Content from "@/components/landing/Content"
import Faq from "@/components/landing/Faq"
import Features from "@/components/landing/Features"
import Hero from "@/components/landing/Hero"
import Pricing from "@/components/landing/Pricing"
import Stats from "@/components/landing/Stats"
import Testimonials from "@/components/landing/Testimonials"

export default function Landing() {
    return (
        <>
            {/* Hero */}
            <Hero />
            {/* Features */}
            <Features />
            {/* Content */}
            <Content />
            {/* Stats */}
            <Stats />
            {/* Testimonials */}
            <Testimonials />
            {/* Pricing */}
            <Pricing />
            {/* FAQ */}
            <Faq />
            {/* Footer */}
            <Footer />
        </>
    )
}