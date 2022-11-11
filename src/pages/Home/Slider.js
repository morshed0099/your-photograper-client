import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Slider = () => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gradient-to-r mt[-20px] p-4 h-[80vh] w-[100vw] from-purple-500 to-pink-500 mb-8">
            
                

                    <div className='w-[100%] mt-9 p-3'>
                        <h1 className='text-white text 2xl font-bold'>Your <span className='text-blue-600'>Photographer</span> Redy</h1>
                        <h1 className='text-3xl text-white font-bold'>Are You GeT Reday For Hire ME</h1>
                        <TypeAnimation
                            sequence={[
                                'Weading Photgraphy', // Types 'One'
                                2000, // Waits 1s
                                'Fassion Photography', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Wild Animal Photography',
                                2000,  // Types 'Three' without deleting 'Two'

                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '2em', color: 'orange' }}
                        >
                        </TypeAnimation>
                        <Button gradientMonochrome="lime" className='mx-auto mt-4' >Book Now</Button>

                    </div>

                    <div className='w-[100%] mt-20 '>
                        <Carousel className='h-[200px] md:h-[250px] lg:[h-350px] hidden md:block lg:block' slideInterval={5000}>
                            <img className='rounded-lg'
                                src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3408744.jpg&fm=jpg"
                                alt="..." />
                            <img className='rounded-lg'
                                src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3408744.jpg&fm=jpg"
                                alt="..." />
                            <img className='rounded-lg'
                                src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3408744.jpg&fm=jpg"
                                alt="..." />
                            <img className='rounded-lg'
                                src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3408744.jpg&fm=jpg"
                                alt="..." />
                            <img className='rounded-lg'
                                src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3408744.jpg&fm=jpg"
                                alt="..." />
                        </Carousel>

                    
                </div>           
        </div>
    );
};

export default Slider;