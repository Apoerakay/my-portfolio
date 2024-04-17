import React, { useEffect, useState } from 'react';
import AVTR1 from "../../assets/apo7.jpeg";
import "./achievement.css";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const data = [
   
    {
        avatar: AVTR1,
        title: "Web Developer Trainee - MEST Africa",
        year: 'February,2024',
        post: 'I was Selected to take part in a 12 week intensive training on full-stack web development by MEST africa.'
    },
    {
        avatar: AVTR1,
        title: "Moreton Bay Regional Council Entrepreneurship & Innovation Web Development Job Simulation on Forage",
        year: 'February,2024',
        post: 'I completed a job simulation that involved website planning and creation. During this process, I created a sitemap and user flow using a diagram creation tool. Additionally, I utilized HTML and CSS to develop a landing page.'
    },
    {
        avatar: AVTR1,
        year: '2018',
        title: ' Vice Chairman  | SRC Amalgamated Committee | University for Development Studies',
        post: 'Worked in conjunction with the Chairman and other committee members to moderate actions between various school associations and the SRC.'
    },
   
];

const Achievement = () => {
    return(
    <section id='achievements'>
    <h1 className="text-center font-bold text-2xl text-sky-900 mb-4">My Achievements</h1>
    <Swiper
        className='container-achievement'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }} // Enable keyboard control
    >
        {data.map(({ avatar, title, post, year }, index) => {
            return (
                <SwiperSlide key={index} className='Achievement'>
                    <div className='achievement-img'>
                        <img src={avatar} alt={`Avatar ${index}`} />
                    </div>
                    <h5 className='achievement-title'>{title}</h5>
                    <small className='achievement-note'>{post}</small>
                    <small className='achievement-time'>{year}</small>
                </SwiperSlide>
            );
        })}
    </Swiper>
</section>
    );
}

export default Achievement;
