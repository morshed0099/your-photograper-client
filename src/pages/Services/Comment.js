import React, { useContext } from 'react';
import { userAuth } from '../../AuthProvider/AuthProvider';

const Comment = ({ cmt }) => { 
    const { email, comment,photoURL } = cmt;
    return (
        <>
        <h1 className='text-orange-600 text-3xl mt-10 rounded-md'>Reviews</h1>
            <div className='flex justify-evenly p-4 bg-indigo-600 m-3 text-white'>

                <img className='rounded-full w-[80px] h-[80px]' src={photoURL} alt="" />
                <p className='text-1xl font-bold'>email: {email}</p>
                <p  className='text-1xl font-bold'> review: {comment}</p>
            </div>
        </>
    );
};

export default Comment;