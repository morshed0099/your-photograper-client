import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import brid from '../../media/bf33e6237cd17959f1e2093dc34ae3a3.jpg'
import model from '../../media/model.jpeg';
import model1 from '../../media/model1.jpeg'
import model2 from '../../media/model2.jpeg'
import model3 from '../../media/model3.jpeg'
import model4 from '../../media/model4.jpeg'
import model5 from '../../media/model5.jpeg'
import tiger from '../../media/tiger.jpeg'


const Galarry = () => {
    return (
        <div>
            <div className='max-w-[1000px] mx-auto gap-4 p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

                <div>
                    <img src={brid} className='mb-3' alt="" />
                    <img src={model5} className="mb-3 h-[370px]" alt="" />
                </div>
                <div className='col-span-1 md:col-span-1 lg:col-span-2'>
                    <img src={model1} className=" mb-3 w-full" alt="" />
                    <div className='grid gap-4 grid-cols1 md:grid-cols-2'>
                        <img src={model3} className="mb-3 h-[445px]" alt="" />
                        <img src={model4} className="h-[445px] " alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img className='mb-3' src={model} alt="" />
                        <img src={tiger} alt="" />
                    </div>

                </div>

            </div>
            {/* <div  className='max-w-[1000px] mt-0 mx-auto gap-4 p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <div></div>
                <div className='flex '>
                    <img className='ml-4' src={tiger} alt="" />
                    <img  src={tiger} alt="" />
                </div>
                <div></div>
            </div> */}
        </div>
    );
};

export default Galarry;