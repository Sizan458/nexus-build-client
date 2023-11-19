import React from 'react';
import Slider from '../Slider/Slider';
import Banner from '../Banner/Banner';
import Footer from '../../Footer/Footer';

const About = () => {
    return (
        <div>
            <Banner/>
            <div className=' overflow-hidden'>
                <Slider/>
            </div>
            <div className='w-[97%] mx-auto'>
                <Footer/>
            </div>
        </div>
    );
};

export default About;