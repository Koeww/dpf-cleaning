import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import ServicesComponent from '../components/ServicesComponent';
import WhyUs from '../components/WhyUs';
import Useful from '../components/Useful';
import Diagram from '../components/Diagram';

const Home = () => {

    return (
        <>
            <Hero />
            <ServicesComponent />
            <Hero2/>
            <WhyUs />
            <Useful />
            <Diagram />
        </>
    )
}

export default Home;