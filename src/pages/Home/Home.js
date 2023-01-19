
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Galarry from './Galarry';
import OurServices from './OurServices';
import ServiceSample from './ServiceSample';
import Slider from './Slider';
import TeamMember from './TeamMember';


const Home = () => {
    const [services, setService] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('https://your-photograper-server-morshed0099.vercel.app/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <Slider></Slider>
            <h1 className='text-blue-600 text-5xl font-bold mt-10 mb-4 text-center'>Our Services </h1>
            <OurServices></OurServices>
           
            <h1 className='text-blue-600 text-5xl font-bold mt-10 mb-4 text-center'>Our Recent Work</h1>
          
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4'>
                {
                    services.map(service => <ServiceSample
                        key={service._id}
                        service={service}
                    ></ServiceSample>)
                }
            </div>
            <Link to='/services'><Button gradientMonochrome="lime" className='mx-auto'>See ALL Services</Button></Link>
            <div className='w-[96%] hidden lg:block mx-auto mt-5 mb-5'>
                <h1 className='text-blue-600 text-5xl font-bold mt-10 mb-4'>Our Image Galary</h1>
                <Galarry></Galarry>
            </div>
            <div className='mt-5'>
            <h1 className='text-blue-600 text-5xl font-bold mt-10 mb-4'>Our Team Members</h1>
                <TeamMember></TeamMember>
            </div>
        </div>

    );
};

export default Home;