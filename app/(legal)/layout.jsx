import ContentWrapper from "@/components/ContentWrapper"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function LegalLayout({ children }) {
    return (
        <>
            <Navbar />
            <section className="py-26">
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </section>
            <Footer/>
        </>
    )
}