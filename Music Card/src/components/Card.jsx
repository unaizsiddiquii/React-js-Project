import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Card = ({ data, handleAddFav, index }) => {
  const { image, name, artist, added } = data;
  return (
    <div className="w-60 bg-zinc-100 p-4 pb-10 flex rounded-md relative gap-3">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className=" m-2">
        <h3 className="text-xl leading-none font-semibold">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button
        onClick={() => handleAddFav(index)}
        className={`px-4 py-3 ${
          added ? "bg-teal-400" : "bg-orange-600"
        } bg-orange-600  absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]  text-white text-xs rounded-full whitespace-nowrap gap-2 flex`}
      >
        {added ? "Added" : "Add to Favourite"}
        <span>
          <AiFillHeart size={"1rem"} />
        </span>
      </button>
    </div>
  );
};

export default Card;
