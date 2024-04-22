import React from 'react';
import { items, slidesData } from './Builders.helpers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './styles.scss';

export const Builders = () => {
  const CustomPrevArrow = () => (
    <img
      className="swiper-arrow arrow-prev"
      src="/src/assets/icons/arrow-left-circle.svg"
    />
  );
  const CustomNextArrow = () => (
    <img
      className="swiper-arrow arrow-next"
      src="/src/assets/icons/arrow-right-circle.svg"
    />
  );
  return (
    <div className="builders">
      <h2 className="section__title">Застройщики</h2>
      <div className="flex overflow-auto gap-6">
        {items.map((item, i) => (
          <span className="" key={i}>
            {item()}
          </span>
        ))}
      </div>
      <div className="mt-8">
        <div className="relative">
          <div className="absolute z-10 top-[260px]">
            <img src="/src/assets/icons/ihlas-logo.svg" alt="IHLAS Logo" />
          </div>
          <Swiper
            navigation={{
              prevEl: '.swiper-arrow .arrow-prev',
              nextEl: '.swiper-arrow .arrow-next',
            }}
            className="builders__slider"
            modules={[Navigation]}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  className="rounded-3xl"
                  src={slide.imageUrl}
                  alt={slide.title}
                />
                <h3 className="mt-[88px]">{slide.title}</h3>
                <p>{slide.description}</p>
                <button className="btn-filled w-full py-3 flex items-center justify-center gap-2 mt-6">
                  <img src="/src/assets/icons/file.svg" alt="File" />
                  Подробнее об объекте
                </button>
              </SwiperSlide>
            ))}
            <CustomPrevArrow />
            <CustomNextArrow />
          </Swiper>
        </div>
      </div>
    </div>
  );
};
