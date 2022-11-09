import { Button, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';

const Header = () => {
    const {user,logout}=useContext(userAuth);
    const hadelLogout=(event)=>{
        event.preventDefault()
        logout()
        .then(reslut=>{
            alert('logout done')
        }).catch(error=>console.error(error))

    }
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand >
                <Link to='/'>
                    <FaCamera  className='inline-flex mr-4 text-blue-600 text-2xl'/>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Your Photograper
                    </span>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link to='/'>Home</Link>
                
                  {
                    user?.email?
                    <>
                    <Button onClick={hadelLogout}>LogOut</Button>
                    <Link to='/reviews'>MyReview</Link>
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