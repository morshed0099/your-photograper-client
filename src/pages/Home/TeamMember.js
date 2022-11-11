import { Card } from 'flowbite-react';
import React from 'react';

const TeamMember = () => {

    return (
        <div className='w-[95] max-auto'>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <Card>
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
                    </div>
                </Card>
                <Card>
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
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default TeamMember;