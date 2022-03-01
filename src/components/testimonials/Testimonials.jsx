import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avator1.jpg'
import AVTR2 from '../../assets/avator2.jpg'
import AVTR3 from '../../assets/avator3.jpg'
import AVTR4 from '../../assets/avator4.jpg'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Joan Mitchell',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit provident libero voluptas voluptatem? Error accusantium voluptatem ea hic facilis incidunt harum dolore provident? Ipsa harum quas dolorum unde eligendi cum."
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Mill Polar',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit provident libero voluptas voluptatem? Error accusantium voluptatem ea hic facilis incidunt harum dolore provident? Ipsa harum quas dolorum unde eligendi cum."
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Brent Mark',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit provident libero voluptas voluptatem? Error accusantium voluptatem ea hic facilis incidunt harum dolore provident? Ipsa harum quas dolorum unde eligendi cum."
  },
  {
    id:4,
    avatar: AVTR4,
    name: 'Micheal Jordan',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit provident libero voluptas voluptatem? Error accusantium voluptatem ea hic facilis incidunt harum dolore provident? Ipsa harum quas dolorum unde eligendi cum."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials' >
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules 
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        
        {
          data.map(({id, avatar, name, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials