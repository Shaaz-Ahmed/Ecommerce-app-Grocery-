import React from "react";
import Slider from "react-slick";


const HomeBanners = ()=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };


    return(
        <div className='homeBannerSection'>
            <Slider {...settings}>
                <div className='item'>
                        <img src="https://cmsimages.shoppersstop.com/Men_web_4a8105e1e9/Men_web_4a8105e1e9.png" className="w-100"/>
                </div>
                <div className='item'>
              
                        <img src=" https://cmsimages.shoppersstop.com/diwali_sale_banner_web_1_9ff04846e9/diwali_sale_banner_web_1_9ff04846e9.jpg" className="w-100"/>
                </div>
                <div className='item'>
                        <img src="https://cmsimages.shoppersstop.com/Footwear_web_a3138d1dc9/Footwear_web_a3138d1dc9.png" className="w-100"/>
                </div>
                <div className='item'>
                        <img src="https://cmsimages.shoppersstop.com/CL_Web_11_Oct24_f4665b7300/CL_Web_11_Oct24_f4665b7300.jpg" className="w-100"/>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanners