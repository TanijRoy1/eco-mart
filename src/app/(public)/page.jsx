import FeaturedProducts from '@/components/landing/FeaturedProducts';
import Hero from '@/components/landing/Hero';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;