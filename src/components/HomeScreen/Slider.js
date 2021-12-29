import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
// import swiper styles
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/autoplay/autoplay";

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, A11y]}
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
