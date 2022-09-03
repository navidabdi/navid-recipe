// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { GiEmptyHourglass } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";

const RecipeCard = ({ recipes }) => {
  return (
    <div>
      <h2 className="font-bold text-sm my-2">Random Recipes</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
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
            slidesPerView: 5,
          },
        }}
      >
        {recipes.length > 0
          ? recipes.map((recipe) => (
              <SwiperSlide key={recipe.id}>
                <article className="rounded-xl overflow-hidden bg-white">
                  <img
                    className="w-full h-[110px] md:h-[130px] object-cover"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <div className="py-3 px-2">
                    <ul className="flex items-center gap-3 mb-1">
                      <li className="flex gap-1 items-center text-[11px]">
                        <GiEmptyHourglass className="text-green-700" />
                        <p>{recipe.readyInMinutes}</p>
                      </li>
                      <li className="flex gap-1 items-center text-[11px]">
                        <FaHeartbeat className="text-green-700" />
                        <p>{recipe.healthScore}</p>
                      </li>
                    </ul>
                    <h3 className="text-[10px] truncate">{recipe.title}</h3>
                  </div>
                </article>
              </SwiperSlide>
            ))
          : ""}
      </Swiper>
    </div>
  );
};

export default RecipeCard;
