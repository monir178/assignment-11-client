import React from 'react';
import Banner from './Banner';
import Services from './Services';
import About from './About';
import Trusted from './Trusted';
import Head from '../../layout/Head/Head';



const Home = () => {
    return (
        <div>
            <Head title="Home"></Head>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Trusted></Trusted>
        </div>
    );
};

export default Home;
