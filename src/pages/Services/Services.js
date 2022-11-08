import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services=useLoaderData()
    console.log(services,'dddd');
    return (
        <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4'>
           {
            services.map(service=><ServiceCard
             key={service._id}
             service={service}
            ></ServiceCard>)
           }
        </div>
    );
};

export default Services;