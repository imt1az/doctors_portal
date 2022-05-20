import React from 'react';
import Info from '../InfoDetails/Info';
import Service from '../ServiceDetails/Service';
import Footer from '../Shared/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;