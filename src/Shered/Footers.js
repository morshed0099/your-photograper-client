

import { Footer } from 'flowbite-react';
import { FooterBrand } from 'flowbite-react/lib/esm/components/Footer/FooterBrand';
import React from 'react';
import { FaDribbble, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footers = () => {
  return (
    <Footer className='bg-gray-900 mt-4 text-white' container={true}>
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
           <FaDribbble/>             
            <FaGithub/>
           <FaInstagram/>
           <FaTwitter/>
          </div>
        </div>
      </div>
    </Footer>

  );
};

export default Footers;