import React from 'react';
import Footer from '../../../components/footer/footer';
import Header from '../../../components/header/Header';
import Hero from './layouts/Hero';

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    );
};

export default Home;