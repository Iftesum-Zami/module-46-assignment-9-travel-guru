import React from 'react';
import BgImg from '../../images/picture/rectangle-1.png';
import Header from '../Header/Header';
import TravelPlace from '../TravelPlace/TravelPlace';

const Home = () => {
    const bgImg = {
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BgImg})`,
        height:"100vh",
        backgroundSize:"cover",
        backgroundPosition:"center",
    }

    return (
        <div style={bgImg}>
            <Header></Header>
            <TravelPlace></TravelPlace>
        </div>
    );
};

export default Home;