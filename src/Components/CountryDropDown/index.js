import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog'; // Import Dialog
import DialogTitle from '@mui/material/DialogTitle';

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
                <h5>Choose your Delivery Location</h5>
                <p>Enter your address and we will specify the offer of your area</p>
            </Dialog>
        </>
    );
};

export default CountryDropDown;
