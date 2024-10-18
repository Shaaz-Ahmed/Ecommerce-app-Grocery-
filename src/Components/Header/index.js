import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'; // Import Typography component
import CountryDropDown from '../CountryDropDown';
import { BiCartAdd } from "react-icons/bi";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import Stack from '@mui/material/Stack';
import { IoMdNotificationsOutline } from "react-icons/io";


const Header = () => {
    const context = useContext(MyContext);

    const handleAddToCart = () => {
        console.log("Item added to cart");
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
                        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                            <Grid item xs={6} sm={2}>
                                <div className="logowrapper d-flex align-items-center">
                                    <Link to={'/'}>
                                        <img src={logo} alt='logo' style={{ width: '100%', maxWidth: '150px' }} />
                                    </Link>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={8} className="d-flex align-items-center part2">
                                {context.countryList.length !== 0 && <CountryDropDown />}
                                <SearchBox />

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    {/* <Typography
                                        variant="h6"
                                        className="responsive-login"
                                        style={{ fontFamily: 'Arial', color: '#6c757d', textAlign: 'center' }}
                                    >
                                        Login
                                    </Typography> */}
                                </div>
                            </Grid>

                            <Grid item xs={6} sm={2} className="d-flex align-items-center justify-content-end">
                                <div className="ml-auto d-flex align-items-center">
                                    {/* <Button
                                        className="circle1"
                                        style={{
                                            height: '40px',
                                            backgroundColor: '#233a95',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: '10px',
                                            margin: '0',
                                            borderRadius: '5px'
                                        }}
                                        onClick={handleAddToCart}
                                    >
                                        <BiCartAdd style={{ fontSize: '25px', color: 'white' }} />
                                        <span style={{ marginLeft: '8px', fontSize: '16px', color: 'white' }}>CART</span>
                                    </Button> */}
                                    <Stack spacing={2} direction="row">
      
                                    <Button variant="text" className='login'>Login</Button>
      <Button variant="contained" className="btn btn-primary d-flex align-items-center"> <BiCartAdd className="me-2" /> CART</Button>
     
    </Stack>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>

            <Navigation />
        </>
    );
};

export default Header;
