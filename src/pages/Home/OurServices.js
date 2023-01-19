import React from 'react';
import brid from '../../media/bf33e6237cd17959f1e2093dc34ae3a3.jpg'
import model from '../../media/model.jpeg'
import tiger from '../../media/tiger.jpeg'
import { StarIcon } from '@heroicons/react/24/solid'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const OurServices = () => {
    return (
        <div className='max-w-[1000px] mx-auto'>
            <div className='p-8 md:flex justify-between items-center flex-row-reverse  gap-3  mx-8 mt-6'>
                <div className='p-4 hidden md:block'>
                    <PhotoProvider>
                        <PhotoView src={brid}>
                            <img className=' h-[400px] rounded-2xl' src={brid} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='flex-1'>
                    <h1 className='flex justify-start text-2xl font-bold text-gray-500'>Wedding Photography</h1>
                    <div className='flex p-6'>
                        <div className='w-[7px] md:h-[300px] rounded-2xl bg-green-800 lg:h-[200px]'></div>
                        <div className='ml-4'>
                            <i className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores cupiditate sint maiores, aut delectus? Earum a pariatur numquam deserunt dignissimos provident fuga non impedit recusandae cupiditate. Blanditiis, nostrum est.
                            </i>
                            <p className='text-gray-500 mt-4'>
                                Instument: <strong>DSLR</strong>
                            </p>
                            <p className='mt-2 text-gray-500'>
                                Delivery: Wthin Two Day's All Photo After Editing.
                            </p>
                            <p className='flex '>

                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-8 md:flex justify-between items-center flex-row-reverse  gap-3  mx-8 mt-6'>
                <div className='flex-1'>
                    <h1 className='flex justify-start text-2xl font-bold text-gray-500'>Modeling Photography</h1>
                    <div className='flex p-6'>
                        <div className='w-[7px] md:h-[300px] rounded-2xl bg-green-800 lg:h-[200px]'></div>
                        <div className='ml-4'>
                            <i className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores cupiditate sint maiores, aut delectus? Earum a pariatur numquam deserunt dignissimos provident fuga non impedit recusandae cupiditate. Blanditiis, nostrum est.
                            </i>
                            <p className='text-gray-500 mt-4'>
                                Instument: <strong>DSLR</strong>
                            </p>
                            <p className='mt-2 text-gray-500'>
                                Delivery: Wthin Two Day's All Photo After Editing.
                            </p>
                            <p className='flex '>

                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-4 hidden md:block'>
                <PhotoProvider>
                        <PhotoView src={model}>
                            <img className=' h-[400px] rounded-2xl' src={model} alt="" />
                        </PhotoView>
                    </PhotoProvider>                   
                </div>

            </div>
            <div className='p-8 md:flex justify-between items-center flex-row-reverse  gap-3  mx-8 mt-6'>
                <div className='p-4 hidden md:block'>
                <PhotoProvider>
                        <PhotoView src={tiger}>
                            <img className=' h-[400px] rounded-2xl' src={tiger} alt="" />
                        </PhotoView>
                    </PhotoProvider>                      
                </div>
                <div className='flex-1'>
                    <h1 className='flex justify-start text-2xl font-bold text-gray-500'>Wild Life Photography</h1>
                    <div className='flex p-6'>
                        <div className='w-[7px] md:h-[300px] rounded-2xl bg-green-800 lg:h-[200px]'></div>
                        <div className='ml-4'>
                            <i className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores cupiditate sint maiores, aut delectus? Earum a pariatur numquam deserunt dignissimos provident fuga non impedit recusandae cupiditate. Blanditiis, nostrum est.
                            </i>
                            <p className='text-gray-500 mt-4'>
                                Instument: <strong>DSLR</strong>
                            </p>
                            <p className='mt-2 text-gray-500'>
                                Delivery: Wthin Two Day's All Photo After Editing.
                            </p>
                            <p className='flex '>

                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                                <StarIcon className="h-6 w-6 ml-2 mt-2 text-yellow-500"></StarIcon>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;