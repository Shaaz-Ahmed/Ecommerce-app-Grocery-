import React from 'react';
import HomeBanners from "../../Components/HomeBanners";
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; // Swiper's pagination CSS
import { Pagination } from 'swiper/modules'; // Correct import for Swiper's Pagination module
import ProductItem from '../../Components/ProductItem';
import HomeCat from '../../Components/HomeCat';


const Home = () => {
    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <>
            <HomeBanners />
            <HomeCat />

            <section className='homeProducts'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='banner'>
                                <img src={banner1} alt="Banner" className='cursor' />
                            </div>

                            <div className='banner mt-4'>
                                <img src={banner2} alt="Banner" className='cursor' />
                            </div>
                        </div>

                        {/* ......... */}
                        
                        <div className='col-md-9 productRow'>
                            <div className='d-flex align-items-center'>
                                <div className='info w-75'>
                                    <h3 className='mb-0 hd'>BEST SELLER</h3>
                                    <p className='text-light text-sml mb-0'>Do not miss the current offer until the end of the month</p>
                                </div>
                                <Button className='viewAllBtn ml-auto'>
                                    View all <IoIosArrowRoundForward />
                                </Button>
                            </div>

                            <div className='product_row w-100 mt-4'>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]} // Add Swiper's Pagination module
                                    className='mySwiper'
                                >
                                    <SwiperSlide className='item productItem'>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide className='item productItem'>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide className='item productItem'>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide className='item productItem'>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide className='item productItem'>
                                        <ProductItem />
                                    </SwiperSlide>

                                </Swiper>
                            </div>




                            <div className='d-flex align-items-center mt-5'>
                                <div className='info w-75'>
                                    <h3 className='mb-0 hd'>New Products</h3>
                                    <p className='text-light text-sml mb-0'>New product with updated stock</p>
                                </div>
                                <Button className='viewAllBtn ml-auto'>
                                    View all <IoIosArrowRoundForward />
                                </Button>
                            </div>

                            <div className='product_row w-100 mt-4'>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]} // Add Swiper's Pagination module
                                    className='mySwiper'
                                >
                                    <SwiperSlide className='item productItem'>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide className='item productItem'>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide className='item productItem'>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide className='item productItem'>
                                        <ProductItem />
                                    </SwiperSlide>

                                    <SwiperSlide className='item productItem'>
                                        <ProductItem />
                                    </SwiperSlide>

                                </Swiper>
                            </div>

                        </div>
                    </div>
                </div>

                
            </section>

            
        </>
    );
};

export default Home;
