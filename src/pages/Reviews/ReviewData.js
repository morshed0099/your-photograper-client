import { Button, Card, Label, TextInput } from 'flowbite-react';

const ReviewData = ({ review,handelDelete }) => {
    console.log(review);
    const { photoURL, comment,service_description,service_image, service_name, _id, email } = review   
    

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
                <div className='md:mt-20 mb-0'>
                    <h1 className='text-2xl font-semibold text-indigo-800'>Your reviews</h1>
                    <Card>
                        <form className="flex flex-col gap-4">
                            <div>
                                <img src={photoURL} className='w-[50px] h-[50px] rounded-full' alt="" />
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
                                    defaultValue={comment}
                                    required={true}
                                />
                            </div>
                          
                            <Button type="submit">
                                update
                            </Button>
                            <Button onClick={(event)=>handelDelete(event,_id)}  type="submit">
                                delete
                            </Button>
                        </form>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default ReviewData;