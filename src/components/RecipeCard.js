// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const RecipeCard = ({ recipes }) => {
  return (
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
            <SwiperSlide>
              <article
                key={recipe.id}
                className="rounded-xl overflow-hidden bg-white"
              >
                <img
                  className="w-full h-[120px] object-cover"
                  src={recipe.image}
                  alt=""
                />
                <div className="py-3 px-2">
                  <h3 className="text-[10px] truncate">{recipe.title}</h3>
                </div>
              </article>
            </SwiperSlide>
          ))
        : ""}
    </Swiper>
  );
};

export default RecipeCard;
