import React from 'react'; // Make sure to import React
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";

const Navigation = () => {
    return (
        <>
           <nav>
                <div className='container'>
                    <div className='row'>
                        <div className="col-sm-3 navPart1 ">
                            <Button className="allCatTab align-item-center">
                                <span className='icon1' style={{ marginRight: '10px' }}> 
                                    <IoMdMenu /> 
                                </span>
                                <span className='text'> ALL Categories</span>
                                <span className='icon2' style={{ marginLeft: '10px' }}> 
                                    <FaAngleDown /> 
                                </span>
                            </Button>
                        </div>

                        {/* Done with the category components */}
                        <div className='col-9 navPart2 navPart2 d-flex align-items-center'> {/* Adjusted className to 'col-9' */}
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'><Link to='/'> <CiHome /> &nbsp;Home</Link></li>
                                <li className='list-inline-item'><Link to='/'>Mens</Link>
                                    <div className='submenu shadow'>
                                    <Link to='/'>Clothing</Link>
                                    <Link to='/'>Footwares</Link>
                                    <Link to='/'>Watches</Link>
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to='/'>Women</Link>
                                <div className='submenu shadow'>
                                    <Link to='/'>Clothing</Link>
                                    <Link to='/'>Footwares</Link>
                                    <Link to='/'>Watches</Link>
                                    </div></li>
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
