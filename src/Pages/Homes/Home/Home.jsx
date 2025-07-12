import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import ClientLogoMarquee from '../../ClientLogoMarquee/ClientLogoMarquee';
import FeatureCards from '../../FeatureCards/FeatureCards';
import BeMerchant from '../../BeMerchant/BeMerchant';
import HowItWorks from '../../HowWorks/HowItWorks';
import CustomerTestimonials from '../../CustomerTestimonials/CustomerTestimonials';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <HowItWorks></HowItWorks>
             <OurServices></OurServices>
             <ClientLogoMarquee></ClientLogoMarquee>
             <FeatureCards></FeatureCards>
             <BeMerchant></BeMerchant>
             <CustomerTestimonials></CustomerTestimonials>
        </div>
    );
};

export default Home;