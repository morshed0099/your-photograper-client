import React from 'react';

const Comment = ({cmt}) => {
    const {email,comment}=cmt;
    return (
        <div className='flex justify-evenly'>
            <p>{email}</p>
            <p>{comment}</p>
        </div>
    );
};

export default Comment;