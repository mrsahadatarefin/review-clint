import React from 'react';
import File from '../File/File';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         
         <Services></Services>
         <About></About>
         <File></File>

        </div>
    );
};

export default Home;