import React from "react";
import { Link } from "react-router-dom";

const navbar1 = () => {
  return (
    <nav className="w-[100%] bg-gray-100 md:px-[100px] px-[20px] flex  justify-between py-4 box-border">
      <Link to={'/'} className="flex justify-between">
        <div className="flex gap-1 items-center cursor-pointer">
          <h3 className="text-blue-800 font-bold text-3xl">Linked</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
            alt="LinkedinLogo"
            className="w-7 h-7"
          />
        </div>
      </Link>

      <div className="flex items-center gap-2 box-border md:gap-4 justify-center">
        <Link to={'/signUp'} className="md:px-4 md:py-2 box-border text-black rounded-3xl text-xl hover:bg-gray-200 cursor-pointer">
          Join now
        </Link>
        <Link to={'/login'} className="px-4 py-2 box-border border-1 text-blue-800 border-blue-800 rounded-3xl text-xl hover:bg-blue-50 cursor-pointer">
          Sing in
        </Link>
      </div>
    </nav>
  );
};

export default navbar1;
