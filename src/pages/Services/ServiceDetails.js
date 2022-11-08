import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from './Comment';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { decription, image, service_name, price, rating, _id } = service
    const [allComments,setComment]=useState([])
    const [displayComment,setDisplayCommnet]=useState([])

    const handelComment=(event,_id)=>{
        event.preventDefault();
        const form=event.target;
        const comment=form.comment.value;
        const email=form.email.value;
        const service_id=_id;        
        const comments={
            comment:comment,
            email:email,
            service_id: service_id,
          }
          console.log(comments);
          fetch('http://localhost:5000/comments',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(comments)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.acknowledged){
              alert('comment posted');
            }
            form.reset();
          })
    }
 
    console.log(displayComment);
    useEffect(()=>{
        fetch(`http://localhost:5000/comments?id=${_id}`)
        .then(res=>res.json())
        .then(data=>{
            setComment(data)
            setDisplayCommnet(allComments)
        })
    },[displayComment])
   
   
    return (
        <div className='mx-10'>
            <Card imgSrc={image} imgAlt=''>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {service_name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {decription}
                </p>
            </Card>
            <div>
                {
                    displayComment.map(cmt=><Comment
                    key={cmt._id}
                    cmt={cmt}
                    ></Comment>)
                }
            </div>
            <form onSubmit={(event)=>handelComment(event,_id)} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="commbet"
                            value="Your comment"
                        />
                    </div>
                    <TextInput
                        id="comment"
                        type="text"
                        name='comment'
                        required={true}
                    />
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ServiceDetails;