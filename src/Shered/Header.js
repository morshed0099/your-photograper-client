import { Navbar } from 'flowbite-react';
import React from 'react';
import { FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
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
                <Navbar.Link >
                    About
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;