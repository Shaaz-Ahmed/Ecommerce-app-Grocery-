import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog'; // Import Dialog
import DialogTitle from '@mui/material/DialogTitle';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const CountryDropDown = () => {
    return (
        <>
            <Button 
                className="countryDrop d-flex align-items-center" 
                style={{ height: '50px', border: '1px solid #ced4da', borderRadius: '0.25rem', marginRight: '10px' }} // Set height and border
            >
                <div className="info d-flex flex-column text-left mr-2"> {/* Added margin-right */}
                    <span className="label" style={{ color: '#808080' }}> {/* Grey color for "Your Location" */}
                        Your Location
                    </span>
                    <span className="name" style={{ color: '#233a95' }}> {/* Color for "India" */}
                        India
                    </span>
                </div>
                <span className='ml-auto'> 
                    <FaAngleDown /> 
                </span>
            </Button>

            <Dialog open={true} className='locationModal'>
                <h4>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer of your area</p>
                <Button 
                className='close_' 
                style={{ 
                    position: 'absolute', 
                    top: '10px', 
                    right: '10px', 
                    zIndex: 10 // Ensures it stays above other elements
                }}
            >
                <MdClose />
            </Button>
                {/* search box code  start*/}
                <div className="headerSearch d-flex align-items-center ml-3">
                                    <div className="input-group" style={{ width: '450px', height: '50px' }}>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Search location" 
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
                {/* search box code end */}


                {/* county list data start from here  */}
                   
                   <ul className='countryList mt-3'>
                        <li><Button>India</Button></li>
                        <li><Button>Pakistan</Button></li>
                        <li><Button>SriLanka</Button></li>
                        <li><Button>Bangladesh</Button></li>
                        <li><Button>India</Button></li>
                        <li><Button>Pakistan</Button></li>
                        <li><Button>SriLanka</Button></li>
                        <li><Button>Bangladesh</Button></li>
                        <li><Button>India</Button></li>
                        <li><Button>Pakistan</Button></li>
                        <li><Button>SriLanka</Button></li>
                        <li><Button>Bangladesh</Button></li>
                        <li><Button>India</Button></li>
                        <li><Button>Pakistan</Button></li>
                        <li><Button>SriLanka</Button></li>
                        <li><Button>Bangladesh</Button></li>
                   </ul>
                {/* country list data ends here */}
            </Dialog>
        </>
    );
};  

export default CountryDropDown;
