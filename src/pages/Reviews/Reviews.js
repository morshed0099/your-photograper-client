import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { userAuth } from '../../AuthProvider/AuthProvider';
import ReviewData from './ReviewData';

const Reviews = () => {
    const { user } = useContext(userAuth)
    console.log(user?.email);
    const userEmail = user?.email
    const [reviews, setReview] = useState([])
    const [restReviw,setRestReview]=useState([])  

    const handelDelete=(event,id)=>{
        event.preventDefault();
        const agrree=window.confirm('are your sure delete')
        console.log(agrree)
         if(agrree){
        fetch(`http://localhost:5000/comment/${id}`,{
        method:'DELETE',
        headers:{'content-type':'application/json'}
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.deletedCount > 0 ){
            alert('delete successfully')  
            setRestReview(reviews)
         }

       }) }  
    }
    useEffect(() => {
        fetch(`http://localhost:5000/comment?email=${userEmail}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setReview(data)               
            })
    }, [userEmail,restReviw])
    return (
        <div>
            <h1>{reviews.length}</h1>
            {
                reviews.length === 0 ? <>
                    <h1>no Reviews found</h1>
                </> :
                    <>                        

                        {
                            reviews.map(review => <ReviewData
                                key={review._id}
                                review={review}
                                handelDelete={handelDelete}
                            >
                            </ReviewData>)
                        }
                    </>
            }
        </div>
    );
};

export default Reviews;