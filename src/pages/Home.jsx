import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import ServicesComponent from '../components/ServicesComponent';
import WhyUs from '../components/WhyUs';
import Useful from '../components/Useful';
import Diagram from '../components/Diagram';
import Offer from '../components/Offer';
import GoogleMapsReviews from '../components/GoogleReviews';

const Home = () => {

    return (
        <>
            <Hero />
            <Offer />
            <GoogleMapsReviews/>
            <ServicesComponent />
            <Hero2/>
            <WhyUs />
            <Useful />
            <Diagram />
        </>
    )
}

export default Home;