// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { GiEmptyHourglass } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";

const RecipeSlider = ({ recipes }) => {
  return (
    <div className="my-5">
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          // when window width is >= 992px
          992: {
            width: 992,
            slidesPerView: 2,
            spaceBetween: 25,
          },
        }}
      >
        {recipes.length > 0
          ? recipes.map((recipe) => (
              <SwiperSlide key={recipe.id}>
                <article className="rounded-xl overflow-hidden bg-white">
                  <div className="relativ">
                    <div className="absolute rounded-xl inset-0 bg-black/40"></div>
                    <img
                      className="w-full h-[180px] md:h-[250px] object-cover"
                      src={recipe.image}
                      alt={recipe.title}
                    />
                    <div className="md:p-5 w-[75%] absolute left-[50%] z-10 top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col ">
                      <ul className="flex items-center gap-3 mb-1 md:mb-2 text-white">
                        <li className="flex gap-1 items-center text-sm md:text-md">
                          <GiEmptyHourglass className="text-white" />
                          <p>{recipe.readyInMinutes}</p>
                        </li>
                        <li className="flex gap-1 items-center text-sm md:text-md">
                          <FaHeartbeat className="text-white" />
                          <p>{recipe.healthScore}</p>
                        </li>
                      </ul>
                      <h3 className="text-md font-bold text-white  md:text-xl">
                        {recipe.title}
                      </h3>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))
          : ""}
      </Swiper>
    </div>
  );
};

export default RecipeSlider;
