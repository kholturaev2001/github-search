import React from "react";
import { useAppSelector } from "../hooks/redux";

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0)
    return <p className="text-center mt-10 ">No favourite items added...</p>;

  return (
    <div className="flex pt-10 mx-auto h-screen w-full ">
      <ul className="list-none w-full flex items-center flex-col">
        {favourites.map((el) => (
          <li className="bg-blue-300 my-1 p-2 rounded-md w-[80%] overflow-hidden truncate" key={el}>
            <a href={el} target="_blank" rel="noreferrer" >{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
