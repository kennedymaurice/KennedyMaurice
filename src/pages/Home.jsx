import SEO from "../components/seo/SEO";
import Hero from "../components/home/Hero";
import Credibility from "../components/home/Credibility";
import ServicePillars from "../components/home/ServicePillars";
import FeaturedProjects from "../components/home/FeaturedProjects";
import WhyWorkWithMe from "../components/home/WhyWorkWithMe";
import CTA from "../components/home/CTA";

const Home = () => {
    return (
        <>
            <SEO
                title="Healthcare Business & Market Access Consultant in Kenya"
                description="Kennedy Maurice helps healthcare businesses, institutions, entrepreneurs, and service-based organizations establish, digitize, comply, procure, market, and grow."
                path="/"
            />

            <Hero />
            <Credibility />
            <ServicePillars />
            <FeaturedProjects />
            <WhyWorkWithMe />
            <CTA />
        </>
    );
};

export default Home;
