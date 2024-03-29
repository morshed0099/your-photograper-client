import { Button, Card, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { userAuth } from '../../AuthProvider/AuthProvider';

const AddService = () => {
    const { user } = useContext(userAuth)
    const hadelAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const service_name = form.service.value;
        const decription = form.decription.value;
        const image = form.image.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const myDate = new Date()

        const services = {
            service_name: service_name,
            decription: decription,
            image: image,
            price: price,
            ratings: ratings,
            myDate,
        }
        fetch('https://your-photograper-server-morshed0099.vercel.app/services', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'add service!',
                        'success'
                    )
                }
                form.reset();
            })
            .catch(error => {
                console.log(error)
                const message = (error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: { message },

                })
            })
    }

    return (
        <div className='w-[96%] p-8  mx-auto'>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div>

                    <Card>
                        <h3 className='text-center text-2xl font-bold'>Add Services</h3>
                        <form onSubmit={hadelAddService} className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="service_name"
                                        value="service_name"
                                    />
                                </div>
                                <TextInput
                                    type="text"
                                    placeholder="service name"
                                    name='service'
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="decription"
                                        value="decription"
                                    />
                                </div>
                                <Textarea
                                    id="decription"
                                    type="text"
                                    name="decription"
                                    placeholder='type description'
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="image"
                                        value="image"
                                    />
                                </div>
                                <TextInput
                                    id="image"
                                    type="text"
                                    name="image"
                                    placeholder='set image url'
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="price"
                                        value="price"
                                    />
                                </div>
                                <TextInput
                                    id="price"
                                    type="price"
                                    name="price"
                                    placeholder='set price'
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="ratings"
                                        value="ratings"
                                    />
                                </div>
                                <TextInput
                                    id="ratings"
                                    type="ratings"
                                    name="ratings"
                                    placeholder='set ratings'
                                    required={true}
                                />
                            </div>

                            <Button type="submit">
                                Submit
                            </Button>
                        </form>
                    </Card>
                </div>
                <div className='hidden text-center md:block'>
                    {
                        user.photoURL ? <img className='w-[50px] h-[50px] mx-auto sticky top-[90px] rounded-full' src={user.photoURL} alt="" /> : <img className='w-[50px] h-[50px] mx-auto sticky top-[90px] rounded-full' src='https://www.masscue.org/wp-content/uploads/2017/03/male-no-image.jpg' alt='/' />
                    }
                    {
                        user.displayName ? <h1 className='mt-5 sticky  top-[140px] text-3xl text-black font-bold'>welcome: {user.displayName}</h1> : <h1 className='mt-5 text-3xl text-black sticky  top-[130px] font-bold'>welcome: {user.email}</h1>

                    }
                    <p className='sticky   top-[170px]'> Add  Your Service</p>
                </div>
            </div>
        </div>
    );
};

export default AddService;