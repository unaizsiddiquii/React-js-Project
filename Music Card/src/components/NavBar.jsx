import React from "react";
import { SiYoutubemusic } from "react-icons/si";

const NavBar = ({ data }) => {
  return (
    <div className="w-full px-20 py-3 flex justify-between item-center">
      <h1 className="text-white flex gap-1 text-orange-500 ">
        <span>
          <SiYoutubemusic size={"1.2rem"} color={"orange"}/>
        </span>
        range
      </h1>
      <div
        className="flex gap-3 p-2 px-4 bg-orange-600 text-white text-sm
      rounded-md "
      >
        <h3>Favourites</h3>
        <h4>{data.filter((item) => item.added).length}</h4>
      </div>
    </div>
  );
};

export default NavBar;
