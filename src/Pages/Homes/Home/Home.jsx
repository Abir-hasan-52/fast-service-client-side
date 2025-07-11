import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import ClientLogoMarquee from '../../ClientLogoMarquee/ClientLogoMarquee';
import FeatureCards from '../../FeatureCards/FeatureCards';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <OurServices></OurServices>
             <ClientLogoMarquee></ClientLogoMarquee>
             <FeatureCards></FeatureCards>
        </div>
    );
};

export default Home;