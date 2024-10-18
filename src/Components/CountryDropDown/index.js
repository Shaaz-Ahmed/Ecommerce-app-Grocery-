import React, { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import axios from 'axios';
import { MyContext } from '../../App';

const CountryDropDown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [countryList, setCountryList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('India'); // Default selected country
    const context = useContext(MyContext);

    // Fetching country list from API
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const countries = response.data.map(country => ({ name: country.name.common }));
                setCountryList(countries);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <>
            <Button
                onClick={() => setIsOpenModal(true)}
                className="countryDrop d-flex align-items-center"
                style={{
                    height: '50px',
                    border: '1px solid #ced4da',
                    borderRadius: '0.50rem',
                    marginRight: '10px',
                    width: '200px', // Set to full width using Bootstrap's responsive class
                    // maxWidth: '600px' // Maximum width set to 600px
                }}
            >
                <div className="info d-flex flex-column text-left">
                    <span className="label" style={{ color: '#808080' }}>
                       Location
                    </span>
                    <span className="name" style={{ color: '#233a95' }}>
                        {selectedCountry} {/* Dynamically showing selected country */}
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
                        onClick={() => setIsOpenModal(false)}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            zIndex: 10
                        }}
                    >
                        <MdClose />
                    </Button>
                </DialogTitle>
                <div>
                    <p>Enter your address and we will specify the offer of your area</p>
                </div>

                <div className="headerSearch d-flex align-items-center ml-3">
                    <div className="input-group" style={{ width: '100%', maxWidth: '600px', height: '50px' }}>
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
                            <span className="input-group-text"
                                style={{
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

                <ul className='countryList mt-3'>
                    {
                        countryList.length !== 0 && countryList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button
                                        onClick={() => {
                                            setSelectedCountry(item.name);
                                            setIsOpenModal(false);
                                        }}
                                    >
                                        {item.name}
                                    </Button>
                                </li>
                            )
                        })
                    }
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDropDown;
