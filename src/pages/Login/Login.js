import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { userAuth } from '../../AuthProvider/AuthProvider';

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const { loginWithEmail, loginWithGoolgle } = useContext(userAuth)
    const hadendlLoin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmail(email, password)
            .then(result => {
                const user = result.user
                Swal.fire(
                    'Good job!',
                    'LOGIN!',
                    'success'
                  )
                const currentUser = {
                    email: user?.email
                }
                alert('login success')
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                        navigate(from, { replace: true });
                    })
                  
            }).catch(error => {
                console.error(error)
                const message=error.message
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: {message},              
                })
            })

    }
    const loginGoogle = () => {
        loginWithGoolgle()
            .then(result => {
                const user = result.user
                Swal.fire(
                    'Good job!',
                    'LOGIN!',
                    'success'
                  )
                const currentUser = {
                    email: user.email
                }
                alert('login success')
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                        navigate(from, { replace: true });
                    })
                  
            }).catch(error => {
              console.error(error)
              const message=error.message
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: {message},              
              })
            })
    }
    return (
        <>
            <form onSubmit={hadendlLoin} className="flex rounded-md flex-col mb-5 gap-4 w-[96] boder p-2 shadow-lg lg:w-[50%] mx-auto">
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
                        placeholder="name@flowbite.com"
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
                        are you new ? <Link to='/signup'><span className='text-orange-600 text-1xl font-bold'>rgister first</span></Link>
                    </Label>
                </div>
                <Button type="submit">
                    Submit
                </Button>
                <div className='flex justify-between items-center'>
                    <hr className='w-[45%] border-orange-700' />Or<hr className='w-[45%] border-orange-700' />
                </div>
                <Button onClick={loginGoogle} ><FaGoogle className='mx-auto text-orange-600 font-bold text-2xl p-1 mb-5'></FaGoogle></Button>
            </form>

        </>
    );
};

export default Login;