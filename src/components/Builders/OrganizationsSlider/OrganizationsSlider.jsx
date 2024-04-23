import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { items } from '../Builders.helpers';
import './styles.scss';

const OrganizationsSlider = () => {
  const swiperRef = useRef(null);

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const updateNavigationState = (swiper) => {
    setPrevDisabled(swiper.isBeginning);
    setNextDisabled(swiper.isEnd);
  };

  useEffect(() => {
    const swiper1 = swiperRef.current?.swiper;

    if (swiper1) {
      swiper1.on('slideChange', () => updateNavigationState(swiper1));

      updateNavigationState(swiper1);
    }

    return () => {
      swiper1?.off('slideChange');
    };
  }, []);

  const CustomPrevArrow = () => {
    return (
      <img
        onClick={() => {
          swiperRef.current.swiper.slidePrev();
        }}
        className="organization-arrow organization-arrow-prev hidden lg-md:block"
        src={`/src/assets/icons/arrow-left-circle${
          prevDisabled ? '-disabled' : ''
        }.svg`}
      />
    );
  };

  const CustomNextArrow = () => (
    <img
      onClick={() => {
        swiperRef.current.swiper.slideNext();
      }}
      className="organization-arrow organization-arrow-next hidden lg-md:block"
      src={`/src/assets/icons/arrow-right-circle${
        nextDisabled ? '-disabled' : ''
      }.svg`}
    />
  );

  return (
    <div className="organizationSlider">
      <Swiper
        ref={swiperRef}
        navigation={{
          nextEl: 'organization-arrow organization-arrow-next',
          prevEl: 'organization-arrow organization-arrow-prev',
        }}
        breakpoints={{
          390: {
            navigation: false,
            slidesPerView: 4,
          },
          992: {
            navigation: true,
            slidesPerView: 5,
          },
        }}
        slidesPerView={4}
        spaceBetween={40}
        freeMode={true}
      >
        {items.map((Item) => (
          <SwiperSlide key={Item()}>
            <div className="icon">{Item()}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomPrevArrow />
      <CustomNextArrow />
    </div>
  );
};

export default OrganizationsSlider;
