import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { userAuth } from '../../AuthProvider/AuthProvider';
import ReviewData from './ReviewData';

const Reviews = () => {
    const { user,logout } = useContext(userAuth)
    console.log(user?.email);
    const userEmail = user?.email
    const [reviews, setReview] = useState([])
   

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
        if(data.deletedCount > 0)
        alert('delete order successfully')
        const remaing=reviews.filter(rev=>rev._id !== id)
        setReview(remaing)
    })
    
    }  
    }   
 
    useEffect(() => {
        fetch(`http://localhost:5000/comment?email=${userEmail}`,{
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