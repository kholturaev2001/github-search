import React from "react";
import { useAppSelector } from "../hooks/redux";

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0)
    return <p className="text-center">No favourite items added :(</p>;

  return (
    <div className="flex pt-10 mx-auto h-screen w-screen justify-center">
      <ul className="list-none">
        {favourites.map((el) => (
          <li key={el}>
            <a href={el} target="_blank" rel="noreferrer" >{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
