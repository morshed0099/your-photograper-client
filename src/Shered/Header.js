import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';

const Header = () => {

    const { user, logout } = useContext(userAuth);
    const hadelLogout = (event) => {
        event.preventDefault()
        logout()
            .then(reslut => {
                  alert('logout done');
                <Navigate to='/login'></Navigate>

            }).catch(error => console.error(error))

    }
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='lg:h-[80px] shadow-lg mb-2 sticky  top-0 z-50'
        >
            <Navbar.Brand >
                <Link to='/'>

                    <h1 className='text-4xl text-black font-bold'>  <FaCamera className='inline-flex mr-4 text-blue-600 text-2xl ml-4' /> Your <span className='text-blue-600'>PhotoGrapher</span></h1>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link to='/'>Home</Link>
                {
                    user?.email ?
                        <>
                            <Link to='/reviews'>MyReview</Link>
                            <Link to='/addservice'>AddService</Link>
                            <Button gradientMonochrome="lime" className='ml-3' onClick={hadelLogout}>LogOut</Button>
                        </>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                        </>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;