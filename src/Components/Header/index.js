import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import CountryDropDown from '../CountryDropDown';
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BiCartAdd } from "react-icons/bi";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';

const Header = () => {
    const context = useContext(MyContext);

    // Function to handle adding an item to the cart
    const handleAddToCart = () => {
        // Implement your logic for adding items to the cart here
        console.log("Item added to cart");
        // You can also update state or context to reflect the added item
    };

    return (
        <>
            <div className='headerwrapper'>
                <div className='top-strip bg-purple'>
                    <div className='container'>
                        <p className='mb-0 mt-0 text-center'>
                            Due to <b>high amount of request</b>, orders may be processed with a slight delay
                        </p>
                    </div>
                </div>

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logowrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}>
                                    <img src={logo} alt='logo' />
                                </Link>
                            </div>

                            <div className="col-sm-10 d-flex align-items-center part2">
                                {
                                    context.countryList.length !== 0 && <CountryDropDown />
                                }

                                <SearchBox />

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button 
                                        className="circle" 
                                        style={{ 
                                            width: '100px', // Equal width for a perfect circle
                                            height: '30px', // Equal height for a perfect circle
                                            border: '2px solid rgba(173, 216, 230, 0.1)',
                                            backgroundColor: '#233a95', // Background color set to #233a95
                                            display: 'flex', // Center the icon
                                            justifyContent: 'center', // Center the icon horizontally
                                            alignItems: 'center', // Center the icon vertically
                                            padding: '0', // Ensure no padding affects the circle shape
                                            margin: '0' // Ensure no margin affects the circle shape
                                        }} 
                                    >
                                        <FiUser style={{ fontSize: '20px', color: 'white' }} /> {/* Icon color set to white */}
                                    </Button>

                                    <div className='ml-auto'> 
                                        <span className='price'> $3.29</span>
                                    </div>

                                    <Button  
                                        className="circle1" 
                                        style={{ 
                                            height: '60px', // Height for the button
                                            backgroundColor: '#233a95', // Background color for the button
                                            display: 'flex', // Center the icon and text
                                            justifyContent: 'center', // Center the icon horizontally
                                            alignItems: 'center', // Center the icon vertically
                                            padding: '10px', // Add padding for better spacing
                                            margin: '0', // Ensure no margin affects the button
                                            borderRadius: '5px' // Optional: add some border radius for a smoother look
                                        }} 
                                        onClick={handleAddToCart} // Function to handle cart addition
                                    > 
                                        <BiCartAdd style={{ fontSize: '30px', color: 'white' }} /> {/* Icon color set to white */}
                                        <span style={{ marginLeft: '8px', fontSize: '16px', color: 'white' }}>CART</span> {/* Improved text appearance */}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Navigation />
        </>
    );
};

export default Header;
