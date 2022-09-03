import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
const Details = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getDetail = async () => {
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_RECIPE_API}`;
      const api = await fetch(url);
      const data = await api.json();
      setDetail(data);
    };
    getDetail();
  }, [id]);

  return (
    <div className="md:w-[60%] md:mx-auto lg:w-[40%]">
      {detail && (
        <div className="bg-white m-1 p-4 rounded-md">
          <div>
            <img
              className="w-full rounded-lg"
              src={detail.image}
              alt={detail.title}
            />
            <h1 className="font-bold text-xl pt-1 pb-3">{detail.title}</h1>
          </div>
          <ul className="my-5 p-3 bg-green-50 rounded-lg">
            {detail.extendedIngredients &&
              detail.extendedIngredients.map((ingredient) => (
                <li className="flex space-x-1">
                  <AiOutlineCheck className="text-green-500" />
                  <p className="text-sm">{ingredient.original}</p>
                </li>
              ))}
          </ul>
          <div className=" bg-slate-100 p-3">
            <h2 className="font-bold">Summary</h2>
            <div
              className="text-sm text-justif"
              dangerouslySetInnerHTML={{ __html: detail.summary }}
            ></div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: detail.instructions }}
            className="my-5"
          ></div>
        </div>
      )}

      <div>{console.log(detail)}</div>
    </div>
  );
};

export default Details;
