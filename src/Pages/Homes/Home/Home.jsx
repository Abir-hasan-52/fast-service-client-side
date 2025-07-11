import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import ClientLogoMarquee from '../../ClientLogoMarquee/ClientLogoMarquee';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <OurServices></OurServices>
             <ClientLogoMarquee></ClientLogoMarquee>
        </div>
    );
};

export default Home;