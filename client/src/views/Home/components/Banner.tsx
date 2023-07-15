import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box w="100%" h="100%">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView="auto"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        style={{ height: "100%",overflow:"hidden" }}
      >
        <SwiperSlide>
          <Img
            rounded="lg"
            w="100%"
            h="100%"
            objectFit="cover"
            src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-nhat-ban-dep.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            rounded="lg"
            w="100%"
            h="100%"
            objectFit="cover"
            src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-nhat-ban-dep.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            rounded="lg"
            w="100%"
            h="100%"
            objectFit="cover"
            src="https://thuthuatnhanh.com/wp-content/uploads/2021/06/hinh-anh-nhat-ban-dep.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
export default Banner;
