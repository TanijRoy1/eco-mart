import FAQSection from '@/components/landing/FAQSection';
import FeaturedProducts from '@/components/landing/FeaturedProducts';
import GreenMovementCTA from '@/components/landing/GreenMovementCTA';
import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import SustainabilityImpact from '@/components/landing/SustainabilityImpact';
import WhyEcoMart from '@/components/landing/WhyEcoMart';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <WhyEcoMart></WhyEcoMart>
            <HowItWorks></HowItWorks>
            <SustainabilityImpact></SustainabilityImpact>
            <FeaturedProducts></FeaturedProducts>
            <FAQSection></FAQSection>
            <GreenMovementCTA></GreenMovementCTA>
        </div>
    );
};

export default Home;