import { Card } from 'flowbite-react';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const TeamMember = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
       };
    return (
        <div className='max-w-[1000px] mx-auto mb-[30px]'>            
            <Slider {...settings} className="p-4">
                <div className='mb-2'>
                    <Card className='mr-2 ml-2'>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                src='https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1'
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                alt=''
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Bonnie Green
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Wild Animal Photograper
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                               <strong>Experience : 4 Years</strong>
                            </span>
                        </div>
                    </Card>
                </div>
                <div >
                    <Card className='mr-2 ml-2'>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                src='https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1'
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                alt=''
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Bonnie Green
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Wild Animal Photograper
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                               <strong>Experience : 4 Years</strong>
                            </span>
                        </div>
                    </Card>
                </div>
                <div >
                    <Card className='mr-2 ml-2'>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                src='https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1'
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                alt=''
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Bonnie Green
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Wild Animal Photograper
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                               <strong>Experience : 4 Years</strong>
                            </span>
                        </div>
                    </Card>
                </div>
                <div >
                    <Card className='mr-2 ml-2'>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                src='https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1'
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                alt=''
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Bonnie Green
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Wild Animal Photograper
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                               <strong>Experience : 4 Years</strong>
                            </span>
                        </div>
                    </Card>
                </div>
                
            </Slider>
        </div>
    );


};

export default TeamMember;