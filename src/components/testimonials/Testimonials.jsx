import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Vaibhav',
    review: 'Naman’s problem solving skills are out of the box. He analyses the problem and helps the team to come up with viable solutions. I worked with him for one of out startup idea together in early days of college, where he showed his commendable design and development skills in web developement. He thinks of the problem first and plans which code is less as well as efficient for the respective UI.'
  },
  {
    avatar: AVTR2,
    name: 'Kunal',
    review: 'Naman is a great learner with always being restless to learn more and more. He never becomes satisfied and always trying to outperform his abilities. One always gets to learn and feel motivated so much when he is around. He never leaves any stone unturned to give the best.'
  },
  {
    avatar: AVTR3,
    name: 'Pratik',
    review: 'Naman is a furious learner. He is always looking for things to get better and better. His management skills are exemplary. We have been associated for many years and worked on various web development projects together, he is a team leader who always looking to get the best out of everyone.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesperview={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;