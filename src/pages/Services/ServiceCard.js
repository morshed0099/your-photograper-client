import { Button, Card,} from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { decription, image, service_name,_id } = service
    return (
        <div>
            <div >
                <div>
                    <Card className='h-[500px]' imgSrc={image} imgAlt=''>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {service_name}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {decription.slice(0, 100) + '...'}
                        </p>
                        <Link to={`${_id}`}><Button gradientMonochrome="lime">Details</Button></Link>
                    </Card>
                </div>                
            </div>
        </div>
    );
};

export default ServiceCard;