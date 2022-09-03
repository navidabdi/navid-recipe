import { GiFullPizza } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <header className="py-3 px-1 flex justify-between items-center">
      <div className="flex items-center space-x-1 w-[40%] ">
        <GiFullPizza className="text-2xl text-green-600" />
        <p className="font-bold text-green-900">Navid Recipe</p>
      </div>
      <div className="w-[60%] px-3 py-2 md:w-[40%] rounded-md flex items-center justify-between bg-slate-200">
        <input className="outline-none bg-transparent flex-grow" type="text" />
        <BsSearch className="text-green-900" />
      </div>
    </header>
  );
};

export default Header;
