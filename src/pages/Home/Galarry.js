import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import brid from '../../media/bf33e6237cd17959f1e2093dc34ae3a3.jpg'
import model from '../../media/model.jpeg';
import model1 from '../../media/model1.jpeg'
import model3 from '../../media/model3.jpeg'
import model4 from '../../media/model4.jpeg'
import model5 from '../../media/model5.jpeg'
import tiger from '../../media/tiger.jpeg'


const Galarry = () => {
    return (
        <div>
            <div className='max-w-[1000px] mx-auto gap-4 p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

                <div>
                    <PhotoProvider>
                        <PhotoView src={brid}>
                            <img src={brid} className='mb-3' alt="" />                            
                        </PhotoView>
                    </PhotoProvider>
                    <PhotoProvider>
                        <PhotoView src={model5}>
                        <img src={model5} className="mb-3 h-[376px]" alt="" />                          
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className='col-span-1 md:col-span-1 lg:col-span-2'>
                <PhotoProvider>
                        <PhotoView src={model1}>
                        <img src={model1} className=" mb-3 w-full" alt="" />                         
                        </PhotoView>
                    </PhotoProvider>
                    
                    <div className='grid gap-4 grid-cols1 md:grid-cols-2'>
                    <PhotoProvider>
                        <PhotoView src={model3}>
                        <img src={model3} className="mb-3 h-[454px]" alt="" />                        
                        </PhotoView>
                    </PhotoProvider>
                    <PhotoProvider>
                        <PhotoView src={model4}>
                        <img src={model4} className="h-[454px] " alt="" />                      
                        </PhotoView>
                    </PhotoProvider>
                       
                        
                    </div>
                </div>
                <div>
                    <div>
                    <PhotoProvider>
                        <PhotoView src={model}>
                        <img className='mb-3' src={model} alt="" />                     
                        </PhotoView>
                    </PhotoProvider>
                    <PhotoProvider>
                        <PhotoView src={tiger}>
                        <img src={tiger} alt="" />                   
                        </PhotoView>
                    </PhotoProvider>                       
                        
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