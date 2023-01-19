import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import google from '../../media/google.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { userAuth } from '../../AuthProvider/AuthProvider';
import wed from '../../media/biye.jpg'

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
                fetch('https://your-photograper-server-morshed0099.vercel.app/jwt', {
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
                const message = error.message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: { message },
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
                fetch('https://your-photograper-server-morshed0099.vercel.app/jwt', {
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
                const message = error.message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: { message },
                })
            })
    }
    return (
        <div  className='p-8' style={{
            backgroundImage: `url(${wed})`
          }}>
             <div className='w-96 text-white bg-transparent md:mr-[50px]  bg-gray-600 bg-opacity-70 mx-auto p-4 flex flex-col justify-between gap-3 border border-gray-400 mt-9 rounded-2xl shadow-2xl'>
            <div className='flex justify-center mt-[-6px]'>
                <img src="https://th.bing.com/th/id/R.c11b6f38dffc24a4508217513b0e50bd?rik=Pt%2bkITlukiMkWg&riu=http%3a%2f%2fwww.emmegi.co.uk%2fwp-content%2fuploads%2f2019%2f01%2fUser-Icon.jpg&ehk=zjS04fF4nxx%2bpkvRPsSezyic3Z7Yfu%2fuoT75KnbNv1Y%3d&risl=&pid=ImgRaw&r=0" className='h-24 w-24 rounded-full ' alt="" />
            </div>
            <h3 className='text-3xl text-black font-bold text-center p-4'>Login Form</h3>
            <form onSubmit={hadendlLoin} className=" text-white">
                <div className='mb-2'>
                    <div className="mb-2 text-white block">
                        <Label
                        className='text'
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        name='email'
                        type="email"
                        placeholder="example@gmail.com"
                        required={true}
                    />
                </div>
                <div className='mb-2'>
                    <div className="mb-2 block">
                        <Label
                        className='text'
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
                <div className="flex items-center gap-2 className='mb-4'">

                    <Label htmlFor="remember"
                    className='text'>
                        are you new ? <Link to='/signup'><span className='text-gray-900 text-1xl font-bold'>rgister first</span></Link>
                    </Label>
                </div>
                <Button type="submit" className='mt-4 btn btn-sm w-full'>
                    Submit
                </Button>

            </form>
            <div className='flex justify-between items-center'>
                <hr className='w-[45%] border-gray-400' />OR<hr className='w-[45%] border-gray-400' />
            </div>
            <button onClick={loginGoogle}> <div
            className='flex justify-center'
            >
                <img className='w-12 h-12 rounded-full' src={google} alt="" />
            </div></button>
        </div>
        </div>
       
    );
}

export default Login;