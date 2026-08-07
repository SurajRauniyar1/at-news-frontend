import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/landing/Hero";
import Stats from "../../components/landing/Stats";
import Features from "../../components/landing/Features";
import LatestPreview from "../../components/landing/LatestPreview";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/landing/Footer";

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <Features />
            <LatestPreview />
            <CTA />
            <Footer />
        </>
    );
}