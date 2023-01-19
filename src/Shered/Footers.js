

import { Footer } from 'flowbite-react';
import React from 'react';
import facebook from '../media/facebook.png'
import twitter from '../media/twitter.png'
import linkedin from '../media/linkedin.png'


const Footers = () => {
  return (
    <Footer className='bg-gray-900 mt-4 p-8 text-white border border-gray-300' >
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
       
                <h1 className='text-4xl text-black font-bold'>Your <span className='text-blue-600'>PhotoGrapher</span></h1>
          
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">  
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="your photographer"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <span className='text-blue-600'>Fellow us</span>
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
    </Footer>

  );
};

export default Footers;