import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import CountryDropDown from '../CountryDropDown';
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BiCartAdd } from "react-icons/bi";

const Header = () => {
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
                                <CountryDropDown />

                                {/* Added margin-left directly to the input-group */}
                                <div className="headerSearch d-flex align-items-center ml-3"> {/* Removed mr-3 */}
                                    <div className="input-group" style={{ width: '450px', height: '50px' }}>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Search items" 
                                            aria-label="Search items"
                                            style={{ 
                                                backgroundColor: '#f3f4f7', 
                                                height: '50px',
                                                border: '1px solid #ced4da',
                                                borderRight: 'none',
                                                borderRadius: '0.25rem 0 0 0.25rem'
                                            }}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" style={{ 
                                                backgroundColor: '#f3f4f7', 
                                                height: '50px', 
                                                border: '1px solid #ced4da', 
                                                borderLeft: 'none', 
                                                borderRadius: '0 0.25rem 0.25rem 0' 
                                            }}>
                                                <IoSearch />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Header search end here  */}

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button 
                                        className="circle" 
                                        style={{ 
                                            width: '60px', // Equal width for a perfect circle
                                            height: '60px', // Equal height for a perfect circle
                                            // border: '1px solid #ced4da', // Border color
                                            borderRadius: '60%', // Make it a perfect circle
                                            backgroundColor: 'rgba(173, 216, 230, 0.1)',  
                                            display: 'flex', // Center the icon
                                            justifyContent: 'center', // Center the icon horizontally
                                            alignItems: 'center', // Center the icon vertically
                                            padding: '0', // Ensure no padding affects the circle shape
                                            margin: '0' // Ensure no margin affects the circle shape
                                        }} 
                                    >
                                        <FiUser style={{ fontSize: '20px' }} /> {/* Increase icon size here */}
                                    </Button>

                                    <div className='ml-auto'> 
                                            <span className='price'> $3.29</span>
                                            
                                    </div>

                                    <Button  className="circle1" 
                                        style={{ 
                                            width: '60px', // Equal width for a perfect circle
                                            height: '60px', // Equal height for a perfect circle
                                            // border: '1px solid #ced4da', // Border color
                                            borderRadius: '60%', // Make it a perfect circle
                                            backgroundColor: 'rgba(173, 216, 230, 0.1)',   
                                            display: 'flex', // Center the icon
                                            justifyContent: 'center', // Center the icon horizontally
                                            alignItems: 'center', // Center the icon vertically
                                            padding: '0', // Ensure no padding affects the circle shape
                                            margin: '0' // Ensure no margin affects the circle shape
                                        }} > <BiCartAdd  style={{ fontSize: '20px' }} /> </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
