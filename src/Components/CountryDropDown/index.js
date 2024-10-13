import React, { useState, useContext, useEffect } from 'react'; // Added useEffect
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog'; // Import Dialog
import DialogTitle from '@mui/material/DialogTitle';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import axios from 'axios'; // Import axios
import { MyContext } from '../../App';

const CountryDropDown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false); // Corrected state variable name
    const [countryList, setCountryList] = useState([]); // Local state for country list
    const context = useContext(MyContext);

    // Fetching country list from API
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all'); // API endpoint to get countries
                const countries = response.data.map(country => ({ name: country.name.common })); // Map to get country names
                setCountryList(countries);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []); // Empty dependency array to run only once when the component mounts

    return (
        <>
            <Button 
                onClick={() => setIsOpenModal(true)} // Fixed setIsOpenModal function
                className="countryDrop d-flitems-center" 
                style={{ height: '50px', border: '1px solid #ced4da', borderRadius: '0.25rem', marginRight: '10px' }}
            >
                <div className="info d-flex flex-column text-left mr-2">
                    <span className="label" style={{ color: '#808080' }}>
                        Your Location
                    </span>
                    <span className="name" style={{ color: '#233a95' }}>
                        India
                    </span>
                </div>
                <span className='ml-auto'> 
                    <FaAngleDown /> 
                </span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className='locationModal'>
                <DialogTitle>
                    <h4>Choose your Delivery Location</h4>
                    <Button 
                        className='close_'  
                        onClick={() => setIsOpenModal(false)} // Closing dialog
                        style={{ 
                            position: 'absolute', 
                            top: '10px', 
                            right: '10px', 
                            zIndex: 10 // Ensures it stays above other elements
                        }}
                    >
                        <MdClose />
                    </Button>
                </DialogTitle>
                <div>
                    <p>Enter your address and we will specify the offer of your area</p>
                </div>

                {/* Search Box Code Start */}
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
                {/* Search Box Code End */}

                {/* Country List Data Start */}
                <ul className='countryList mt-3'>
                    {
                        countryList.length !== 0 && countryList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button onClick={() => setIsOpenModal(false)}>{item.name}</Button>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* Country List Data Ends Here */}
            </Dialog>
        </>
    );
};  

export default CountryDropDown;
