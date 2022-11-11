
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { FaServicestack } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Galarry from './Galarry';
import ServiceSample from './ServiceSample';
import Slider from './Slider';


const Home = () => {
    const [services, setService] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <Slider></Slider>
            <div className='bg-white w-[100%] h[70px] '><FaServicestack className='w-[40xp] h-[30px]'></FaServicestack></div>
            <h1 className='text-blue-600 text-5xl font-bold mt-10 mb-4'>Our Service</h1>
            <p className='mt-2 mb-4'>here is short details about our photograpy</p>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4'>
                {
                    services.map(service => <ServiceSample
                        key={service._id}
                        service={service}
                    ></ServiceSample>)
                }
            </div>
            <Link to='/services'><Button gradientMonochrome="lime"   className='mx-auto'>See ALL Services</Button></Link>
            <div className='w-[96%] mx-auto mt-5'>
                <h1 className='text-blue-600 text-5xl font-bold mt-10 mb-4'>Our Image Galary</h1>
                <Galarry></Galarry>
            </div>
        </div>

    );
};

export default Home;