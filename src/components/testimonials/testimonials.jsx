import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'College',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias earum repellat sapiente, laboriosam autem dolorem quae esse ratione aliquid provident? Modi sint voluptatem consequuntur nulla amet quidem, repellendus iusto?'
  },
  {
    avatar: AVTR2,
    name: 'Friends',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias earum repellat sapiente, laboriosam autem dolorem quae esse ratione aliquid provident? Modi sint voluptatem consequuntur nulla amet quidem, repellendus iusto?'
  },
  {
    avatar: AVTR3,
    name: 'Best_friend',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias earum repellat sapiente, laboriosam autem dolorem quae esse ratione aliquid provident? Modi sint voluptatem consequuntur nulla amet quidem, repellendus iusto?'
  },
  {
    avatar: AVTR4,
    name: 'Unknown',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias earum repellat sapiente, laboriosam autem dolorem quae esse ratione aliquid provident? Modi sint voluptatem consequuntur nulla amet quidem, repellendus iusto?'
  },

]


const testimonials = () => {
  return (
    <section id = 'testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      
         // install Swiper modules
         modules={[  Pagination ]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
        >
        {
          data.map (({avatar, name, review}, index ) => {
            return (
              <SwiperSlide key = {index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>Ernest Achiever</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials