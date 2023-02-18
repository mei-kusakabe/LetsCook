import Banner from '@/Components/banner';
import React from 'react';
import NavBar from './Components/navBar';
import RegionalCuisine from './Components/regionalCuisine';

const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <RegionalCuisine></RegionalCuisine>
        </div>
    );
};

export default HomePage;