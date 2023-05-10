import React from "react";
import { useAppSelector } from "../hooks/redux";
import Delete from "../images/icons/Delete";
import { useActions } from "../hooks/actions";

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);
  const { removeFavourite } = useActions();

  if (favourites.length === 0)
    return <p className="text-center mt-10 ">No favourite items added...</p>;

  return (
    <div className="flex pt-10 mx-auto h-screen w-full ">
      <div className="list-none w-full flex items-center flex-col">
        {favourites.map((el) => (
          <div key={el} className="w-[80%] max-w-[560px] flex items-center">
            <a
              href={el}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-300 my-1 p-2 rounded-md flex-1  overflow-hidden truncate"
            >
              {el}
            </a>
            <button
              className="bg-[#f54a4a] p-[7px] m-1 rounded-md"
              onClick={() => {
                removeFavourite(el);
              }}
            >
              <Delete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
