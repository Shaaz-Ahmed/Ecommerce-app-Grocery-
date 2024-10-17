import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Swiper's pagination CSS
import { Navigation } from 'swiper/modules'; // Correct import for Swiper's navigation module

const HomeCat = ()=>{
    return(
     
        <section className='homeCat'>
            <div className="container">
            <Swiper slidesPerView={10}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={1}
                    pagination={{
                    clickable: true,
                   }}
                    modules={[Navigation]} // Add Swiper's Pagination module
                   className='mySwiper'>
                                <SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>


<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>


<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>


<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>


<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>


<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>


<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>


<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className='item text-center'>
        <img
            className="img-fluid" // Bootstrap class for responsive images
            src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6c05243d-4d5d-4427-ae31-f08e14d60818.jpg?ts=1724672692'
            alt="Red Apple"
            style={{ width: '100px', height: '100px' }} // Inline CSS for specific width and height
        />
        <h6>Red Apple</h6>
    </div>
</SwiperSlide>


                    </Swiper>
            </div>
        </section>
     
    )
};

export default HomeCat;