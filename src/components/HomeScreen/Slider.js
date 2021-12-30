import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
// install swiper styles
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

function Slider() {
  return (
    <Swiper
      navigation
      pagination={{ type: "progressbar" }}
      scrollbar={{ draggable: false, hide: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      grabCursor={false}
      loop={true}
    >
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
