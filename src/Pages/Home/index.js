import React from 'react';
import HomeBanners from "../../Components/HomeBanners";
import banner1 from '../../assets/images/banner1.jpg';
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductCards from '../../Pages/Home/ProductCards';

const Home = () => {
    return (
        <>
            <HomeBanners />

            <section className='homeProducts'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='banner'>
                                <img src={banner1} alt="Banner" className='cursor' />
                            </div>
                        </div>
                        <div className='col-md-9 productRow'>
                            <div className='d-flex align-items-center'>
                                <div className='info w-75'>
                                    <h3 className='mb-0 hd'>BEST SELLER</h3>
                                    <p className='text-light text-sml mb-0'>Do not miss the current offer until the end of the month</p>
                                </div>
                                <Button className='viewAllBtn ml-auto'>View all <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className='product_row w-70'>
                                        <ProductCards />
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
