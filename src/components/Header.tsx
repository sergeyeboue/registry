import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="flex items-center justify-between px-4 border-b h-14">
      <div className="flex items-center space-x-2 text-sm ">
        <Link to={"/"} className="text-bg font-bold">
          NPM Registry
        </Link>
      </div>
      <div className="w-full max-w-xl ml-4">
        <SearchInput />
      </div>
    </div>
  );
}

export default Header;
