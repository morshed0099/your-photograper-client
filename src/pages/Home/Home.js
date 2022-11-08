
import React from 'react';
import ServiceSample from './ServiceSample';
import Slider from './Slider';


const Home = () => {
    return (
         <div>
            <Slider></Slider>
            <h1 className='text-blue-600 text-3xl font-bold mt-4 mb-2'>Our Service</h1>
            <ServiceSample></ServiceSample>
         </div>

    );
};

export default Home;