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
    <Box my={5}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Img
            rounded="lg"
            w="100%"
            h="250"
            objectFit="cover"
            src="https://img.freepik.com/free-vector/flat-design-food-banner-template_23-2149076251.jpg?w=826&t=st=1688718725~exp=1688719325~hmac=c23a02f4f44fda8bc0d2db4839a491f69f755d1413bae6e048ea0be01976eed8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Img
            rounded="lg"
            w="100%"
            h="250"
            objectFit="cover"
            src="https://img.freepik.com/free-vector/flat-design-pizza-sale-banner_23-2149116013.jpg?w=826&t=st=1688717306~exp=1688717906~hmac=afb9cc14a1065d517cf2553fc59efd2fbde8f050dfddb4a68225e9343cb9eadd"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
export default Banner;
