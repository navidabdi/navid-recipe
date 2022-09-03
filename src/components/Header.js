import { GiFullPizza } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="py-3 px-1 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-1 w-[40%] ">
        <GiFullPizza className="text-2xl text-green-600" />
        <p className="font-bold text-green-900">Navid Recipe</p>
      </Link>
      <div className="w-[60%] px-3 py-2 md:w-[40%] rounded-md flex items-center justify-between bg-slate-200">
        <input
          className="outline-none bg-transparent w-[90%] md:w-auto"
          type="text"
        />
        <BsSearch className="text-green-900 w-[10%] md:w-auto" />
      </div>
    </header>
  );
};

export default Header;
