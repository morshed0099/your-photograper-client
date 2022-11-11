import { Button, Card } from 'flowbite-react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { Link } from 'react-router-dom';

const ServiceSample = ({ service }) => {
    const { decription, image, service_name, _id } = service

    return (
        <div >
            <div>
                <Card className='h-[500px]'>
                    <PhotoProvider >
                        <PhotoView src={image}>
                            <img className='h-[300px] w-[100%]' src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {service_name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {decription.slice(0, 100) + '...'}
                    </p>
                    <Link to={`/services/${_id}`}><Button gradientMonochrome="lime" >Details</Button></Link>
                </Card>
            </div>
        </div>
    );
};

export default ServiceSample;