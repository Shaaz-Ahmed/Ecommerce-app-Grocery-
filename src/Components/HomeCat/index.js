import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Swiper's pagination CSS
import { Navigation } from 'swiper/modules'; // Correct import for Swiper's navigation module

const HomeCat = ()=>{
    return(
     
        <section className='homeCat'>
            <div className="container">
            <Swiper slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                   }}
                    modules={[Pagination]} // Add Swiper's Pagination module
                   className='mySwiper'>
                                <SwiperSlide>

                                </SwiperSlide>

                    </Swiper>
            </div>
        </section>
     
    )
};

export default HomeCat;