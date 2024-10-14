import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navigation = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className="catWrapper col-sm-12 col-md-3 navPart1">
                            <Button
                                className="allCatTab align-item-center"
                                onClick={handleClick}
                            >
                                <span className='icon1' style={{ marginRight: '10px' }}>
                                    <IoMdMenu />
                                </span>
                                <span className='text'> ALL Categories</span>
                                <span className='icon2' style={{ marginLeft: '10px' }}>
                                    <FaAngleDown />
                                </span>
                            </Button>

                            {/* Animated Dropdown Menu */}
                            <div
                                className={`dropdown-menu ${anchorEl ? 'show' : ''}`}
                                style={{
                                    transition: 'transform 0.3s ease, opacity 0.3s ease',
                                    transform: anchorEl ? 'scale(1)' : 'scale(0.95)',
                                    opacity: anchorEl ? '1' : '0',
                                    display: anchorEl ? 'block' : 'none',
                                    marginTop: '8px',
                                    width: '250px', // Increased width here**
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to='/category1' className='dropdown-item'>Mens</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/category2' className='dropdown-item'>Womens</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/category3' className='dropdown-item'>Beauty</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/category4' className='dropdown-item'>Watches</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/category4' className='dropdown-item'>Kids</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/category4' className='dropdown-item'>Gifts</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/category4' className='dropdown-item'>Mens</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/category4' className='dropdown-item'>Women</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to='/category4' className='dropdown-item'>Watches</Link>
                                </MenuItem>
                            </div>
                        </div>

                        <div className='col-12 col-md-9 navPart2 d-flex align-items-center'>
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'>
                                    <Link to='/'>
                                        <CiHome /> &nbsp;Home
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to='/'>Mens</Link>
                                    <div className='submenu shadow'>
                                        <Link to='/'>Clothing</Link>
                                        <Link to='/'>Footwear</Link>
                                        <Link to='/'>Watches</Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to='/'>Women</Link>
                                    <div className='submenu shadow'>
                                        <Link to='/'>Clothing</Link>
                                        <Link to='/'>Footwear</Link>
                                        <Link to='/'>Watches</Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to='/'>Beauty</Link></li>
                                <li className='list-inline-item'><Link to='/'>Watches</Link></li>
                                <li className='list-inline-item'><Link to='/'>Kids</Link></li>
                                <li className='list-inline-item'><Link to='/'>Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
