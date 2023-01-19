import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';
import ScrollToTop from '../Hooks/ScrollTop';

const Header = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(userAuth);
    const hadelLogout = (event) => {
        event.preventDefault()
        logout()
            .then(reslut => {
                alert('logout done');
                navigate('/login')
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
            <ScrollToTop>
                <Navbar.Collapse>
                    <NavLink className={({isActive})=>isActive?"active":"deactive"} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=>isActive?"active":"deactive"} to='/blog'>Blog</NavLink>
                    {
                        user?.email ?
                            <>
                                <NavLink className={({isActive})=>isActive?"active":"deactive"}  to='/reviews'>MyReview</NavLink>
                                <NavLink className={({isActive})=>isActive?"active":"deactive"} to='/addservice'>AddService</NavLink>
                                <Button gradientMonochrome="lime" className='ml-3' onClick={hadelLogout}>LogOut</Button>
                            </>
                            :
                            <>
                                <NavLink className={({isActive})=>isActive?"active":"deactive"} to='/login'>Login</NavLink>
                            </>
                    }
                </Navbar.Collapse>

            </ScrollToTop>

        </Navbar>
    );
};

export default Header;