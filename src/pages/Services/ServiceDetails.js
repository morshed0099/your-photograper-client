import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { userAuth } from '../../AuthProvider/AuthProvider';
import PrivateRoute from '../../Router/PrivateRoute';
import Comment from './Comment';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { user } = useContext(userAuth);
    const { decription, image, service_name, _id, } = service
    const [allComments, setComment] = useState([])
    const [displayComment, setDisplayCommnet] = useState([])

    const handelComment = (event, service) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const email = form.email.value;
        const service_id = service._id;
        const service_name = service.service_name;
        const service_image = service.image
        const service_description = service.decription
        const comments = {
            comment: comment,
            email: email,
            service_id: service_id,
            service_name: service_name,
            photoURL: user?.photoURL,
            service_image: service_image,
            service_description: service_description
        }
        console.log(comments);
        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('comment posted');
                }
                form.reset();
            })
    }

    console.log(displayComment);
    useEffect(() => {
        fetch(`http://localhost:5000/comments?id=${_id}`)
            .then(res => res.json())
            .then(data => {
                setComment(data)
                setDisplayCommnet(allComments)
            })
    }, [displayComment])


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
                <h1 className='text-black font-bold text-2xl mt-10 rounded-md'>Reviews</h1>
                {
                    displayComment.map(cmt =>
                        <Comment
                            key={cmt._id}
                            cmt={cmt}
                        ></Comment>
                    )
                }
            </div>
            <form onSubmit={(event) => handelComment(event, service)} className="flex flex-col gap-4">
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
                        defaultValue={user?.email}
                        readOnly
                        name='email'
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
                <Button gradientMonochrome="lime" className='py-2 text-white font-bold mt-2 px-4 bg-blue-600 rounded-md'>Book Now</Button>
                
                <Button  gradientMonochrome="lime"   type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ServiceDetails;