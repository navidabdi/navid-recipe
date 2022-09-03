// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { GiEmptyHourglass } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";

import { Link } from "react-router-dom";

const RecipeCard = ({ recipes }) => {
  return (
    <div className="my-10">
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={2}
        navigation
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
          // when window width is >= 992px
          992: {
            width: 992,
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
      >
        {recipes.length > 0
          ? recipes.map((recipe) => (
              <SwiperSlide key={recipe.id}>
                <Link to={`detail/${recipe.id}`}>
                  <article className="rounded-xl overflow-hidden bg-white">
                    <img
                      className="w-full h-[110px] md:h-[200px] object-cover"
                      src={recipe.image}
                      alt={recipe.title}
                    />
                    <div className="py-4 px-3 md:p-5">
                      <ul className="flex items-center gap-3 mb-1 md:mb-2">
                        <li className="flex gap-1 items-center text-sm md:text-md">
                          <GiEmptyHourglass className="text-green-700" />
                          <p>{recipe.readyInMinutes}</p>
                        </li>
                        <li className="flex gap-1 items-center text-sm md:text-md">
                          <FaHeartbeat className="text-green-700" />
                          <p>{recipe.healthScore}</p>
                        </li>
                      </ul>
                      <h3 className="text-sm truncate md:text-md">
                        {recipe.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>
            ))
          : ""}
      </Swiper>
    </div>
  );
};

export default RecipeCard;
