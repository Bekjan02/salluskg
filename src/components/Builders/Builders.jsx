import { items, items2, slidesData } from './Builders.helpers';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import IhlasLogo from '@assets/icons/ihlas-logo.svg?react';
import './styles.scss';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from 'react';

export const Builders = () => {
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const updateNavigationState = (swiper) => {
    setPrevDisabled(swiper.isBeginning);
    setNextDisabled(swiper.isEnd);
  };

  useEffect(() => {
    const swiper1 = swiperRef.current?.swiper;
    const swiper2 = swiperRef2.current?.swiper;

    if (swiper1 && swiper2) {
      swiper1.on('slideChange', () => updateNavigationState(swiper1));
      swiper2.on('slideChange', () => updateNavigationState(swiper2));

      updateNavigationState(swiper1);
      updateNavigationState(swiper2);
    }

    return () => {
      swiper1?.off('slideChange');
      swiper2?.off('slideChange');
    };
  }, []);

  const CustomPrevArrow = () => {
    return (
      <img
        onClick={() => {
          swiperRef.current.swiper.slidePrev();
          swiperRef2.current.swiper.slidePrev();
        }}
        className="swiper-arrow arrow-prev"
        src={`/src/assets/icons/arrow-left-circle${
          prevDisabled ? '-disabled' : ''
        }.svg`}
      />
    );
  };

  const CustomNextArrow = () => (
    <img
      onClick={() => {
        console.log(swiperRef.current.swiper.isEnd);
        swiperRef.current.swiper.slideNext();
        swiperRef2.current.swiper.slideNext();
      }}
      className="swiper-arrow arrow-next"
      src={`/src/assets/icons/arrow-right-circle${
        nextDisabled ? '-disabled' : ''
      }.svg`}
    />
  );

  return (
    <div className="builders">
      <h2 className="section__title"> Застройщики</h2>
      <div className="flex overflow-auto gap-6 lg-md:hidden">
        {items.map((item, i) => (
          <span className="" key={i}>
            {item()}
          </span>
        ))}
      </div>
      <div className="hidden lg-md:block">
        <Swiper>
          {items2.map((Item) => {
            console.log(Item());
            return (
              <SwiperSlide key={Item}>
                <div className="icon">{Item()}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* main content slider */}
      <div className="mt-8">
        <div className="relative">
          <div className="absolute z-10 top-[45%] sm:top-[60%] md:top-2/3 lg-md:top-0 lg-md:right-[32.5%] xl:right-[36.5%]">
            <IhlasLogo />
          </div>
          <div className="lg-md:grid lg-md:grid-cols-2 gap-11 lg-md:px-20">
            <CustomPrevArrow />
            <Swiper
              ref={swiperRef}
              navigation={{
                nextEl: 'swiper-arrow',
                prevEl: 'swiper-arrow',
              }}
              modules={[Navigation, Autoplay]}
              className="w-full"
            >
              {slidesData.map((slide, i) => (
                <SwiperSlide key={i}>
                  <img
                    className="rounded-3xl lg-md:h-full md:w-full"
                    src={slide.imageUrl}
                    alt={slide.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="">
              <Swiper
                ref={swiperRef2}
                navigation={{
                  nextEl: 'swiper-arrow',
                  prevEl: 'swiper-arrow',
                }}
                modules={[Navigation, Autoplay]}
                className="builders__slider"
              >
                {slidesData.map((slide, i) => (
                  <SwiperSlide key={i}>
                    <div className="">
                      <h3 className="mt-[88px] ">{slide.title}</h3>
                      <p>{slide.description}</p>
                      <button className="btn-filled w-full py-3 flex items-center justify-center gap-2 mt-6">
                        <img src="/src/assets/icons/file.svg" alt="File" />
                        Подробнее об объекте
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <CustomNextArrow />
          </div>
        </div>
      </div>
    </div>
  );
};
