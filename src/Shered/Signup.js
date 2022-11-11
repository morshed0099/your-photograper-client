import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { userAuth } from '../AuthProvider/AuthProvider';

const Signup = () => {
    const navigate = useNavigate()
    const { createUserEmail } = useContext(userAuth)
    const handelSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUserEmail(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire(
                    'Good job!',
                    'register!',
                    'success'
                )
                console.log(user);
                navigate('/');
                form.reset();
                alert('user signup successfully');
            }).catch(error => {
                console.error(error);
                const message=(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: {message},
                   
                })
            })
    }
    return (
        <form onSubmit={handelSignup} className="flex rounded-md flex-col mb-5 gap-4 w-[96] boder p-2 shadow-lg lg:w-[50%] mx-auto">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="Name"
                        value="Your Name"
                    />
                </div>
                <TextInput
                    id="name"
                    name='name'
                    type="text"
                    placeholder="your name"
                    required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email1"
                    name='email'
                    type="email"
                    placeholder="your email"
                    required={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="Your password"
                    />
                </div>
                <TextInput
                    id="password1"
                    name='password'
                    type="password"
                    required={true}
                />
            </div>
            <div className="flex items-center gap-2">

                <Label htmlFor="remember">
                    alredy have an accaunt ? <Link to='/login'><span className='text-orange-600 text-1xl font-bold'>Login</span></Link>
                </Label>
            </div>
            <Button type="submit">
                Submit
            </Button>

        </form>
    );
};

export default Signup;