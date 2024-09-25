import React from 'react'
import Hero from '../components/Hero';
import ServicesComponent from '../components/ServicesComponent';
import WhyUs from '../components/WhyUs';
import Useful from '../components/Useful';

const Home = () => {

    return (
        <>
            <Hero />
            <ServicesComponent />
            <WhyUs />
            <Useful />
        </>
    )
}

export default Home;