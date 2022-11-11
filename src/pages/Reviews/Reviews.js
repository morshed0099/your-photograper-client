import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { userAuth } from '../../AuthProvider/AuthProvider';
import ReviewData from './ReviewData';

const Reviews = () => {
    const { user,logout } = useContext(userAuth)
    console.log(user?.email);
    const userEmail = user?.email
    const [reviews, setReview] = useState([])
   

    const handelDelete=(event,id)=>{
        event.preventDefault();
        const agrree=window.confirm('are your sure delete');
        console.log(agrree)
         if(agrree){
        fetch(`https://your-photograper-server-morshed0099.vercel.app/comment/${id}`,{
        method:'DELETE',
        headers:{
            authorization:`Bearer ${localStorage.getItem('token')}`
        }
       })
       .then(res=>res.json())     
       .then(data=>{
        if(data.deletedCount > 0)
        Swal.fire(
            'Good job!',
            'revies delete!',
            'success'
          )
        const remaing=reviews.filter(rev=>rev._id !== id)
        setReview(remaing)
    })
    
    }  
    }   
 
    useEffect(() => {
        fetch(`https://your-photograper-server-morshed0099.vercel.app/comment?email=${userEmail}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
              if(res.status === 401|| res.status === 403){
                
                return logout();
              }
               return res.json()
            })
            .then(data => {               
                if(data.length){
                    setReview(data) 
                }else{
                    
                }
                              
            })
    }, [userEmail])
    return (
        <div>
            <h1 className='text-cyan-700 mt-5 mb-3 text-3xl font-b'>Your Total Review {reviews.length}</h1>
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