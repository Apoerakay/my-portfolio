import React, { useEffect, useState } from 'react';
import AVTR1 from "../../assets/apo7.jpeg";
import "./achievement.css";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Achievement = () => {
    const [achievements, setAchievements] = useState([])
    const getAchievements = () => {
        const url = new URL("https://jadeportfolio-api.onrender.com/achievement")
        fetch(url)
            .then((response) => response.json())
            .then((achievements) => {
                setAchievements(achievements)
            })

            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(getAchievements, [])
    return (
        <section id='achievements'>
            <h5 className=''>My Achievements</h5>
            <h2 className='text-center font-bold text-3xl text-sky-300'>Achievements</h2>
            <Swiper
                className='container-achievement'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {achievements.map(({ avatar, title, description, }, index) => {

                    return (
                        <SwiperSlide key={index} className='Achievement'>
                            <div className='achievement-img'>
                                <img src={AVTR1} alt={`Avatar ${index}`} />
                            </div>
                            <h5 className='achievement-title'>{title}</h5>
                            <small className='achievement-note'>{description}</small>

                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default Achievement;
