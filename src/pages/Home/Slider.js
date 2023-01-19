
import { Button } from 'flowbite-react';
import React from 'react';
import wed from '../../media/wed.jpeg'
import facebook from '../../media/facebook.png'
import twitter from '../../media/twitter.png'
import linkedin from '../../media/linkedin.png'



const Slider = () => {
    return (
        <div className='relative'>
            <div id='heroImages' style={{
                backgroundImage: `url(${wed})`
            }}>
                <div className='w-full h-full bg-black opacity-50'></div>
                <div className='heroText w-[500px]  top-[50%]  ml-[50%] md:ml-[60%]'>
                    <h1 className='text-4xl leading-10 font-bold text-white '>Your Photographer Redy <br />Are You Ready for Hire</h1>
                    <Button className='ml-[33%] mt-4 w-[200px] ' gradientMonochrome="lime"><span className='text-gray-800 font-bold text-1xl'>Book Now</span> </Button>
                    <div className='mt-3 flex ml-[36%]'>
                        <img
                            className='w-10 h-10 ml-3' src={linkedin} alt="" />
                        <img
                            className='w-10 h-10 ml-3' src={facebook} alt="" />

                        <img
                            className='w-10 h-10 ml-3' src={twitter} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Slider;