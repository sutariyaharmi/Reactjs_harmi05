import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SwiperHome = () => {
    return (
        <div>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper ml-3 p-14"
                >
                    <SwiperSlide>
                        <img className='rounded-full' src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-04-pz1lq8er46ukeph2ptujzxqv26xzuyt1z8qkru5ma4.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-full' src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-01-pz1lq4necupf49mjbs81pyp0ongj06e4mq4muqb6z0.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-full' src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-02-pz1lpzy7eoizi7td386wvhvppq3oxovgy2v7gci5u4.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='rounded-full' src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-03-pz1lok92ysk7rnwgh3ufkcxd1j6i6c68eyzi24mtcc.webp" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default SwiperHome
