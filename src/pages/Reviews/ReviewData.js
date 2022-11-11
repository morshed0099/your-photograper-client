import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

const ReviewData = ({ review,handelDelete}) => {
    const [cm, setComents] = useState('')
    console.log(review);
    const { photoURL, comment, service_description, service_image, service_name, _id, email } = review
  
    const reviewUpdate=(event)=>{
        event.preventDefault();
        setComents(event.target.value)

    }
    const updateHandel = (event, _id) => {
        event.preventDefault()
        const comm = cm
        console.log(_id, comm)
        fetch(`http://localhost:5000/comments/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ comm })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update successfully done')
                }
            })

    }

    return (
        <div className=' w-[96%] mx-auto grid gap-5 m-6 grid-cols-1 md:grid-cols-2'>
            <div>
                <div>
                    <Card imgSrc={service_image}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {service_name}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            {service_description}
                        </p>
                    </Card>
                </div>
            </div>

            <div>
                <div className='mb-0 sticky top-[85px]'>
                    <h2 className='text-1xl flex justify-around  ite mb-2 text-black font-bold'>Your review about post</h2>
                    <Card className='h-[70vh]'>
                        <form  className="flex flex-col gap-4">
                            <div>
                                <img src={photoURL ? photoURL : 'https://www.masscue.org/wp-content/uploads/2017/03/male-no-image.jpg'} className='w-[50px] h-[50px] mx-auto rounded-full' alt="" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="your comments"
                                        value="Your email"
                                    />
                                </div>
                                <TextInput
                                    id="email1"
                                    type="email"
                                    readOnly
                                    defaultValue={email}
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="comment"
                                        value="Your review"
                                    />
                                </div>
                                <TextInput
                                    id="password1"
                                    type="text"
                                    onChange={reviewUpdate}
                                    name='comment'                                    
                                    defaultValue={comment}
                                    required={true}
                                />
                            </div>

                            <div className='mb-4'>
                                <Button className='w-[75%] mx-auto' onClick={(event)=>updateHandel(event,_id)} gradientMonochrome="lime" type="submit">
                                    update
                                </Button>
                                <Button className='w-[75%] mx-auto mt-2' gradientMonochrome="lime" onClick={(event) =>handelDelete(event, _id)} type="submit">
                                    Delete
                                </Button>
                            </div>
                        </form>
                    </Card>                    
                </div>
            </div>
        </div>
    );
};

export default ReviewData;